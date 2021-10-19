import {
    PointCharge,
    TestCharge,
    getElectricField,
    getElectricForce,
    getElectricFieldMultiplyByN,
    getElectricForceMultiplyByN,
} from 'cs-zeus'
import {
    getVectorDistance,
    getVectorSize,
    subtractVector,
    getUnitVector,
    Vector,
} from 'cs-zeus/lib/vector'
import styled from '@emotion/styled'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import React from 'react'
import SectionTitle from '../ui/SectionTitle'

type CalculationResultSectionProps = {
    charges: PointCharge[]
    testCharge: TestCharge
}

const CalculationResultSection: React.FC<CalculationResultSectionProps> = ({
    charges,
    testCharge,
}) => {
    const eTotal = getElectricFieldMultiplyByN(charges, testCharge)
    const fTotal = getElectricForceMultiplyByN(charges, testCharge)
    const eTotalUnitVectorLatex = buildLatexUnitVectorMatrix(
        getUnitVector(eTotal)
    )
    const fTotalUnitVectorLatex = buildLatexUnitVectorMatrix(
        getUnitVector(fTotal)
    )
    const eTotalWithVectorLatex = `${buildLatexScientificNotation(
        getVectorSize(eTotal),
        0,
        ''
    )}${eTotalUnitVectorLatex}`
    const fTotalWithVectorLatex = `${buildLatexScientificNotation(
        getVectorSize(fTotal),
        0,
        ''
    )}${fTotalUnitVectorLatex}`
    const eComponentEquation = charges.reduce((prevRawLatex, charge) => {
        return (
            prevRawLatex + `\\vec{E}_{${charge.name.replace('Charge', '')}t} + `
        )
    }, '')
    const eComponentCalculation = charges.reduce(
        (prevRawLatex, charge, currentIndex, arr) => {
            const e = getElectricFieldMultiplyByN([charge], testCharge)
            const eUnitVector = getUnitVector(e)
            const eUnitVectorLatexMatrix =
                buildLatexUnitVectorMatrix(eUnitVector)
            return (
                prevRawLatex +
                `${buildLatexScientificNotation(
                    getVectorSize(
                        getElectricFieldMultiplyByN([charge], testCharge)
                    ),
                    0,
                    ''
                )}${eUnitVectorLatexMatrix} ${
                    (currentIndex + 1) % 2 == 0
                        ? `$$ \n $$ ${
                              currentIndex + 1 != arr.length
                                  ? `\\hspace{1.1cm}`
                                  : ``
                          }`
                        : ``
                } + `
            )
        },
        ''
    )
    const eTotalLatex = `$$\\vec{E}_{total} = ${eComponentEquation.substr(
        0,
        eComponentEquation.length - 2
    )}$$\n $$\\hspace{0.88cm} = ${eComponentCalculation.substr(
        0,
        eComponentCalculation.length - 2
    )}$$\n  $$\\hspace{0.88cm}= ${eTotalWithVectorLatex}\\ \\frac{N}{C}$$`
    const fEquation = `Q_{t} \\times \\vec{E}_{total}`
    const fTotalLatex = `$$\\vec{F}_{total} = ${fEquation} = (${testCharge.q} \\times e) \\times ${eTotalWithVectorLatex}$$ \n $$\\hspace{0.86cm} = ${fTotalWithVectorLatex}\\ N$$`
    return (
        <Wrapper>
            <SectionTitle>Calculation</SectionTitle>
            {charges.map(charge => {
                const r = subtractVector(charge.position, testCharge.position)
                const rUnitVector = getUnitVector(r)
                const rUnitVectorLatexMatrix =
                    buildLatexUnitVectorMatrix(rUnitVector)
                const e = getElectricFieldMultiplyByN([charge], testCharge)
                const eUnitVector = getUnitVector(e)
                const eUnitVectorLatexMatrix =
                    buildLatexUnitVectorMatrix(eUnitVector)
                const chargeName = charge.name.replace('Charge', '')
                const lawLatex = `$$\\vec{E}_{${chargeName}T} = \\frac{kQ}{(r_{${chargeName}T})^2}\\widehat{r}_{${chargeName}T} = \\frac{(9.0 \\times 10^{9}) \\times (${
                    charge.q
                } \\times e)}{(${getVectorDistance(
                    charge.position,
                    testCharge.position
                ).toFixed(
                    2
                )})^2}${rUnitVectorLatexMatrix}$$\n $$\\hspace{2.55cm}= ${buildLatexScientificNotation(
                    getVectorSize(e),
                    0,
                    ''
                )}${eUnitVectorLatexMatrix}\\ \\frac{N}{C}$$`
                return (
                    <Equation key={`electric-field-from-${charge.name}`}>
                        <Latex>{lawLatex}</Latex>
                    </Equation>
                )
            })}
            <Equation key="E-total">
                <Latex>{eTotalLatex}</Latex>
            </Equation>
            <Equation key="F-total">
                <Latex>{fTotalLatex}</Latex>
            </Equation>
        </Wrapper>
    )
}

const buildLatexUnitVectorMatrix = (vector: Vector) => {
    if ((vector.x == 0 || !vector.x) && (vector.y == 0 || !vector.y)) {
        return ''
    }
    return `\\begin{bmatrix}
  ${vector.x.toFixed(2)} \\\\
  ${vector.y.toFixed(2)}
\\end{bmatrix}`
}

const buildLatexScientificNotation: (
    value: number,
    accumulator: number,
    constantMultipler: string
) => string = (
    value: number,
    accumulator: number,
    constantMultipler: string
) => {
    if (value == 0 || isNaN(value)) {
        return '0'
    }
    if (!isFinite(value)) {
        return 'value\\ is\\ too\\ big'
    }
    if (value >= 10) {
        return buildLatexScientificNotation(
            value / 10,
            accumulator + 1,
            constantMultipler
        )
    } else if (value < 1) {
        return buildLatexScientificNotation(
            value * 10,
            accumulator - 1,
            constantMultipler
        )
    }
    return `${value.toFixed(
        2
    )}${constantMultipler} \\times ${10}^{${accumulator}}`
}

const Wrapper = styled.div`
    background-color: var(--primary-color);
    width: 100%;
    padding: 1rem 1rem 1rem 2rem;
`

const Equation = styled.p`
    font-size: 24px;
    color: var(--white);
`

export default CalculationResultSection
