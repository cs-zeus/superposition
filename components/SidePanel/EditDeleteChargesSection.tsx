import Latex from 'react-latex-next';
import Paragraph from '../ui/Paragraph';
import { PointCharge } from 'cs-zeus';
import SectionTitle from '../ui/SectionTitle';
import Swal from 'sweetalert2';
import TextField from '../ui/TextField';
import { Trash2 } from 'react-feather';
import styled from '@emotion/styled';
import withReactContent from 'sweetalert2-react-content';

const customSwal = withReactContent(Swal);

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
					const newQ = parseInt(event.target.value);
					if (newQ === 0 || isNaN(newQ)) {
						customSwal.fire({
							title: <WarningP>Warning</WarningP>,
							html: (
								<p>charge value should not be &quot;0&quot; or &quot; &quot;</p>
							),
						});
					}
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
						<TextField
							type='number'
							value={charge.q}
							onChange={onInputChange}
						/>
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

const WarningP = styled.p`
	color: var(--primary-color);
`;

export default EditDeleteChargesSection;
