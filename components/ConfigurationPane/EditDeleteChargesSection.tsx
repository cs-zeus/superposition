import styled from '@emotion/styled';
import { PointCharge } from 'cs-zeus';
import Paragraph from '../ui/Paragraph';
import SectionTitle from '../ui/SectionTitle';
import TextField from '../ui/TextField';
import Latex from 'react-latex-next';
import { Trash2 } from 'react-feather';

type EditDeleteChargesSectionProps = {
	charges: PointCharge[];
	onDeleteCharge: (chargeName: string) => void;
	onEditCharge: (charge: PointCharge) => void;
};

const EditDeleteChargesSection: React.FC<EditDeleteChargesSectionProps> = ({
	charges,
	onDeleteCharge,
	onEditCharge,
}) => {
	return (
		<Wrapper>
			<SectionTitle>Manage Charges</SectionTitle>
			{charges.map((charge) => {
				const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
					const newCharge = {
						...charge,
						q: parseInt(event.target.value),
					} as PointCharge;
					onEditCharge(newCharge);
				};
				const onIconClick: React.MouseEventHandler<SVGElement> = (
					event: React.MouseEvent<SVGElement>
				) => {
					onDeleteCharge(charge.name);
				};
				const lawLatex = `$${charge.name.split(' ').join('\\ ')}:\\ q = \\ $`;
				return (
					<StyledParagraph key={'edit-delete-charges-' + charge.name}>
						<Latex>{lawLatex}</Latex>
						<TextField value={charge.q} onChange={onInputChange} />
						<StyledTrash onClick={onIconClick} />
					</StyledParagraph>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--primary-color);
	width: 100%;
	padding: 1rem 1rem 1rem 2rem;
	color: var(--white);
`;

const StyledParagraph = styled(Paragraph)`
	margin-top: 0.5rem;
	color: var(--white);
`;

const StyledTrash = styled(Trash2)`
	margin-left: 8px;
	vertical-align: bottom;
`;

export default EditDeleteChargesSection;
