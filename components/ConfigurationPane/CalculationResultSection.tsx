import { PointCharge, TestCharge, getElectricField } from 'cs-zeus'
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
    const eTotal = getElectricField(charges, testCharge)
    const eTotalUnitVectorLatex = buildLatexUnitVectorMatrix(
        getUnitVector(eTotal)
    )
    const eComponentEquation = charges.reduce((prevRawLatex, charge) => {
        return (
            prevRawLatex + `\\vec{E}_{${charge.name.replace('Charge', '')}t} + `
        )
    }, '')
    const eComponentCalculation = charges.reduce((prevRawLatex, charge) => {
        const r = subtractVector(testCharge.position, charge.position)
        const unitVectorR = getUnitVector(r)
        const unitVectorMatrix = buildLatexUnitVectorMatrix(unitVectorR)
        return (
            prevRawLatex +
            `${getVectorSize(getElectricField([charge], testCharge)).toFixed(
                2
            )}${unitVectorMatrix} + `
        )
    }, '')
    const eTotalLatex = `$$\\vec{E}_{total} = ${eComponentEquation.substr(
        0,
        eComponentEquation.length - 2
    )} = ${eComponentCalculation.substr(
        0,
        eComponentCalculation.length - 2
    )} = ${getVectorSize(eTotal)}${eTotalUnitVectorLatex}$$`
    const fTotalLatex = `$$\\vec{F}_{total} = $$`
    return (
        <Wrapper>
            <SectionTitle>Calculation</SectionTitle>
            {charges.map(charge => {
                const r = subtractVector(testCharge.position, charge.position)
                const rUnitVector = getUnitVector(r)
                const rUnitVectorLatexMatrix =
                    buildLatexUnitVectorMatrix(rUnitVector)
                const e = getElectricField([charge], testCharge)
                const eUnitVector = getUnitVector(e)
                const eUnitVectorLatexMatrix =
                    buildLatexUnitVectorMatrix(eUnitVector)
                const chargeName = charge.name.replace('Charge', '')
                const lawLatex = `$$\\vec{E}_{${chargeName}T} = \\frac{kQ}{(r_{${chargeName}T})^2}\\widehat{r}_{${chargeName}T} = \\frac{(9.0 \\times 10^{-9}) \\times (${
                    charge.q
                } \\times 1.602^{-19})}{(${getVectorDistance(
                    charge.position,
                    testCharge.position
                ).toFixed(2)})^2}${rUnitVectorLatexMatrix} = ${getVectorSize(
                    e
                ).toFixed(2)}${eUnitVectorLatexMatrix} \\frac{N}{C}$$`
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
    return `\\begin{bmatrix}
  ${vector.x.toFixed(2)} \\\\
  ${vector.y.toFixed(2)}
\\end{bmatrix}`
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
