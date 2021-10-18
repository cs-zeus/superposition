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
    return (
        <Wrapper>
            <SectionTitle>Calculation</SectionTitle>
            {charges.map(charge => {
                const lawLatex = `$$E_{${charge.name.replace(
                    'Charge',
                    ''
                )}T} = \\frac{kQ}{(r_{${charge.name.replace(
                    'Charge',
                    ''
                )}T})^2}\\widehat{r}_{${charge.name.replace(
                    'Charge',
                    ''
                )}T} = \\frac{(9.0 \\times 10^9) \\times (${
                    charge.q
                } \\times 1.602^{-19})}{(${getVectorDistance(
                    charge.position,
                    testCharge.position
                ).toFixed(2)})^2}${buildLatexUnitVectorMatrix(
                    getUnitVector(
                        subtractVector(charge.position, testCharge.position)
                    )
                )} = ${getVectorSize(
                    getElectricField([charge], testCharge)
                ).toFixed(2)}${buildLatexUnitVectorMatrix(
                    getUnitVector(getElectricField([charge], testCharge))
                )} \\frac{N}{C}$$`
                return (
                    <Equation key={`electric-field-from-${charge.name}`}>
                        <Latex>{lawLatex}</Latex>
                    </Equation>
                )
            })}
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
