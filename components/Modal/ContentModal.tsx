import Image from '../ui/Image';
import Latex from 'react-latex-next';
import Link from 'next/link';
import Modal from './Modal';
import Paragraph from '../ui/Paragraph';
import styled from '@emotion/styled';

type ContentModalProps = {
	isShow: boolean;
	onClose: () => void;
};

const ContentModal: React.FC<ContentModalProps> = ({ isShow, onClose }) => {
	return (
		<Modal
			title='Electric Field and Electric Force'
			onClose={onClose}
			show={isShow}
		>
			<Divisor />
			<TableOfContent>
				<NavigationTitle>Table of Contents</NavigationTitle>
				<Navigation>
					<NavigationItem>
						<NavigationLink href='#electric_field'>
							Electric Field
						</NavigationLink>
					</NavigationItem>
					<NavigationItem>
						<NavigationLink href='#electric_force'>
							Electric Force
						</NavigationLink>
					</NavigationItem>
					<NavigationItem>
						<NavigationLink href='#superposition'>
							Superposition Principle
						</NavigationLink>
					</NavigationItem>
				</Navigation>
			</TableOfContent>
			<Divisor />
			<Section id='electric_field'>
				<SectionTitle>Electric Field</SectionTitle>
				<Paragraph>
					An electric field is the physical field that surrounds
					electrically-charged particles and exerts force on all other charged
					particles in the field, either attracting or repelling them. It also
					refers to the physical field for a system of charged particles.
					Electric fields originate from electric charges, or from time-varying
					magnetic fields. Electric fields and magnetic fields are both
					manifestations of the electromagnetic force, one of the four
					fundamental forces of nature.
				</Paragraph>
				<Paragraph>
					From the study of electric force, the net electric force on a test
					charge is the vector sum of all the electric forces acting on it, from
					all of the various source charges, located at their various positions.
					But what if we use a different test charge, one with a different
					magnitude, or sign, or both? Or suppose we have a dozen different test
					charges we wish to try at the same location? We would have to
					calculate the sum of the forces from scratch. Fortunately, it is
					possible to define a quantity, called the electric field, which is
					independent of the test charge. It only depends on the configuration
					of the source charges, and once found, allows us to calculate the
					force on any test charge.
				</Paragraph>
				<ImageWrapper>
					<Image
						src='/images/electric_field/image1.png'
						alt='electric field 1'
					/>
				</ImageWrapper>
				<Paragraph>
					Suppose we have{' '}
					<LatexWrapper>
						<Latex>{'$N$'}</Latex>
					</LatexWrapper>{' '}
					source charges{' '}
					<LatexWrapper>
						<Latex>{'$q_1$'}</Latex>
					</LatexWrapper>
					,{' '}
					<LatexWrapper>
						<Latex>{'$q_2$'}</Latex>
					</LatexWrapper>
					,{' '}
					<LatexWrapper>
						<Latex>{'$q_3$'}</Latex>
					</LatexWrapper>
					,{' '}
					<LatexWrapper>
						<Latex>{'$...$'}</Latex>
					</LatexWrapper>
					,{' '}
					<LatexWrapper>
						<Latex>{'$q_N$'}</Latex>
					</LatexWrapper>{' '}
					locate at positions{' '}
					<LatexWrapper>
						<Latex>{'$\\vec{r_1}$'}</Latex>
					</LatexWrapper>{' '}
					,{' '}
					<LatexWrapper>
						<Latex>{'$\\vec{r_2}$'}</Latex>
					</LatexWrapper>{' '}
					,{' '}
					<LatexWrapper>
						<Latex>{'$\\vec{r_3}$'}</Latex>
					</LatexWrapper>{' '}
					,{' '}
					<LatexWrapper>
						<Latex>{'$...$'}</Latex>
					</LatexWrapper>{' '}
					,{' '}
					<LatexWrapper>
						<Latex>{'$\\vec{r_N}$'}</Latex>
					</LatexWrapper>{' '}
					, applying{' '}
					<LatexWrapper>
						<Latex>{'$N$'}</Latex>
					</LatexWrapper>{' '}
					electrostatic forces on a test charge{' '}
					<LatexWrapper>
						<Latex>{'$Q$'}</Latex>
					</LatexWrapper>{' '}
					like the figure above. The net force on{' '}
					<LatexWrapper>
						<Latex>{'$Q$'}</Latex>
					</LatexWrapper>{' '}
					is
				</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{F}_{Total} = \\vec{F}_{1} + \\vec{F}_{2} + \\vec{F}_{3} + ... + \\vec{F}_{N}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{F}_{Total} = \\frac{1}{4\\pi\\varepsilon_0}(\\frac{Qq_1}{r^2_1}\\hat{r}_1 + \\frac{Qq_2}{r^2_2}\\hat{r}_2+\\frac{Qq_3}{r^2_3}\\hat{r}_3 + ... +\\frac{Qq_N}{r^2_N}\\hat{r}_N)$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{F}_{Total} = \\frac{Q}{4\\pi\\varepsilon_0}(\\frac{q_1}{r^2_1}\\hat{r}_1+ \\frac{q_2}{r^2_2}\\hat{r}_2+\\frac{q_3}{r^2_3}\\hat{r}_3 + ... +\\frac{q_N}{r^2_N}\\hat{r}_N)$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>which can rewrite as</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>{'$\\vec{F}_{Total} = Q\\vec{E}_{Total}$'}</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>so that</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{E}_{Total} = \\frac{1}{4\\pi\\varepsilon_0}(\\frac{q_1}{r^2_1}\\hat{r}_1+ \\frac{q_2}{r^2_2}\\hat{r}_2+\\frac{q_3}{r^2_3}\\hat{r}_3 + ... +\\frac{q_N}{r^2_N}\\hat{r}_N)$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>which have more compact form as</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{E}_{Total}(P) = \\frac{1}{4\\pi\\varepsilon_0}\\sum_{i=1}^{N}\\frac{q_i}{r^2_i}\\hat{r}_i$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>
					This expression is called the electric field at position{' '}
					<LatexWrapper>
						<Latex>{'$P = P(x, y, z)$'}</Latex>
					</LatexWrapper>{' '}
					of the N source charges. Here,{' '}
					<LatexWrapper>
						<Latex>{'$P$'}</Latex>
					</LatexWrapper>{' '}
					is the location of the point in space where you are calculating the
					field and is relative to the positions{' '}
					<LatexWrapper>
						<Latex>{'$\\vec{r_i}$'}</Latex>
					</LatexWrapper>{' '}
					of the source charges as the figure below
				</Paragraph>
				<ImageWrapper>
					<Image
						src='/images/electric_field/image2.png'
						alt='electric field 2'
					/>
				</ImageWrapper>
				<Paragraph>
					Notice that the calculation of the electric field makes no reference
					to the test charge. Thus, the physically useful approach is to
					calculate the electric field and then use it to calculate the force on
					some test charge later, if needed. Different test charges experience
					different forces, but it is the same electric field. That being said,
					recall that there is no fundamental difference between a test charge
					and a source charge; these are merely convenient labels for the system
					of interest. Any charge produces an electric field; however, just as
					Earth’s orbit is not affected by Earth’s own gravity, a charge is not
					subject to a force due to the electric field it generates. Charges are
					only subject to forces from the electric fields of other charges.
				</Paragraph>
				<Paragraph>For only one charge the equation will be</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{E} = \\frac{1}{4\\pi\\varepsilon_0}\\frac{kq}{r^2}\\hat{r}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>Or simplify to be</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>{'$\\vec{E} = \\frac{kq}{r^2}\\hat{r}$'}</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>where</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>{'$k = \\frac{1}{4\\pi\\varepsilon_0}$'}</Latex>
					</LatexWrapper>
				</CenteredParagraph>
			</Section>
			<Divisor />
			<Section id='electric_force'>
				<SectionTitle>Electric Force</SectionTitle>
				<Paragraph>
					By the experiment with electric charges, it has shown that if two
					objects each have electric charge, then they exert an electric force
					on each other. The magnitude of the force is linearly proportional to
					the net charge on each object and inversely proportional to the square
					of the distance between them. The direction of the force vector is
					along the imaginary line joining the two objects and is dictated by
					the signs of the charges involved.
				</Paragraph>
				<Paragraph>
					By the Coulomb’s Law, the magnitude of the electric force (or Coulomb
					force) between two electrically charged particles as the figure
					simulate can calculate by the equation below. Where{' '}
					<LatexWrapper>
						<Latex>{'$q_2$'}</Latex>
					</LatexWrapper>{' '}
					is a test charge and{' '}
					<LatexWrapper>
						<Latex>{'$q_1$'}</Latex>
					</LatexWrapper>{' '}
					is a source charge.
				</Paragraph>
				<ImageWrapper>
					<Image
						src='/images/electric_force/image1.png'
						alt='electric force 1'
					/>
				</ImageWrapper>
				<Paragraph>
					<strong>Electric force with direction</strong>
				</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$F_{1\\rightarrow\\ 2}=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q_1 q_2}{r_{1\\rightarrow\\ 2}^2}\\hat{r}_{1\\rightarrow\\ 2}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>
					<strong>Magnitude of Electric force</strong>
				</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$|F_{1\\rightarrow\\ 2}|=\\frac{1}{4\\pi\\varepsilon_0}\\frac{|q_1 q_2|}{r_{1\\rightarrow\\ 2}^2}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>
					Where{' '}
					<LatexWrapper>
						<Latex>{'$\\varepsilon_0$'}</Latex>
					</LatexWrapper>{' '}
					is a constant in Coulomb’s law. It is called the permittivity of
					vacuum.
				</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\varepsilon_0 = 8.85 \\times 10^{-12} \\frac{C^2}{N \\cdot m^2}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>
					<strong>Multiple Source Charges</strong>
				</Paragraph>
				<Paragraph>
					Total electric force is similar to other physic force, the net
					electric force on our test charge is simply the vector sum of each
					individual electric force exerted on it by each of the individual
					source charges. Thus, we can calculate the net force on the test
					charge{' '}
					<LatexWrapper>
						<Latex>{'$Q$'}</Latex>
					</LatexWrapper>{' '}
					by calculating the force on it from each source charge, taken one at a
					time, and then adding all those forces together (as vectors). This
					ability to simply add up individual forces in this way is referred to
					as the principle of superposition, and is one of the more important
					features of the electric force. In mathematical form, the equation is
				</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{F}_{Total} = \\frac{1}{4\\pi\\varepsilon_0}Q\\sum_{i=1}^{N}\\frac{q_i}{r_{i}^2}\\hat{r}_{i}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>
					Which can simulate the situation in the figure below
				</Paragraph>
				<ImageWrapper>
					<Image
						src='/images/electric_force/image2.png'
						alt='electric force 2'
					/>
				</ImageWrapper>
				<Paragraph>
					From the equation, if the position of the charges change the force
					will change too. In the real world, the test charge (
					<LatexWrapper>
						<Latex>{'$Q$'}</Latex>
					</LatexWrapper>
					) will have a force exert to it and make it change the position. But
					in this study, we make an assumption that the test charge will fixed
					at the given position. This is study is known as electrostatics, where
					“statics” refers to the constant positions of the source charges and
					the force is referred to as an electrostatic force.
				</Paragraph>
			</Section>
			<Divisor />
			<Section id='superposition'>
				<SectionTitle>Superposition Principle</SectionTitle>
				<CenteredParagraph>
					<blockquote>
						<em>
							“The principle of superposition states that every charge in space
							creates an electric field at point independent of the presence of
							other charges in that medium. The resultant electric field is a
							vector sum of the electric field due to individual charges.”
						</em>
					</blockquote>
				</CenteredParagraph>
				<Paragraph>
					Superposition Principle lets us calculate the total force on a given
					charge due to any number of point charges acting on it. Every charged
					particle creates an electric field in the universe in the space
					surrounding it. The electric field created due to the charge is
					independent of the presence or absence of all other charges. The
					electric field created can be calculated with the help of Coulomb’s
					law. The principle of superposition allows for the combination of two
					or more electric fields. The superposition principle is used to
					compute the net flux, net field, net force, the net potential energy
					of the system.
				</Paragraph>
				<Paragraph>
					In the case of electric force consider the figure below.{' '}
				</Paragraph>
				<ImageWrapper>
					<Image src='/images/superposition/image1.png' alt='superposition 1' />
				</ImageWrapper>
				<Paragraph>
					By using the Superposition principle, we can compute net force by this
					equation. Where{' '}
					<LatexWrapper>
						<Latex>{'$N$'}</Latex>
					</LatexWrapper>{' '}
					is 8
				</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{F}_{Total} = \\frac{1}{4\\pi\\varepsilon_0}Q\\sum_{i=1}^{N}\\frac{q_i}{r_{i}^2}\\hat{r}_{i}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
				<Paragraph>
					In the case of electric field consider the same figure as electric
					force above. Where position{' '}
					<LatexWrapper>
						<Latex>{'$P$'}</Latex>
					</LatexWrapper>{' '}
					is the position of test charge{' '}
					<LatexWrapper>
						<Latex>{'$Q$'}</Latex>
					</LatexWrapper>{' '}
					from the figure above.{' '}
					<LatexWrapper>
						<Latex>{'$\\hat{r_i}$'}</Latex>
					</LatexWrapper>{' '}
					is the unit vector from any source{' '}
					<LatexWrapper>
						<Latex>{'$q$'}</Latex>
					</LatexWrapper>{' '}
					to position{' '}
					<LatexWrapper>
						<Latex>{'$P$'}</Latex>
					</LatexWrapper>
					.
				</Paragraph>
				<CenteredParagraph>
					<LatexWrapper>
						<Latex>
							{
								'$\\vec{E}_{Total}(P) = \\frac{1}{4\\pi\\varepsilon_0}\\sum_{i=1}^{N}\\frac{q_i}{r^2_i}\\hat{r}_{i}$'
							}
						</Latex>
					</LatexWrapper>
				</CenteredParagraph>
			</Section>
			<Divisor />
			<Section>
				<SectionTitle>Reference</SectionTitle>
				<ReferenceList>
					<ReferenceItem>
						Wikipedia contributors. (2021, October 17). Electric field.
						Wikipedia. Retrieved October 28, 2021, from{' '}
						<ReferenceLink href='https://en.wikipedia.org/wiki/Electric_field'>
							https://en.wikipedia.org/wiki/Electric_field
						</ReferenceLink>
					</ReferenceItem>
					<ReferenceItem>
						5.4 Electric Field - University Physics Volume 2 | OpenStax. (n.d.).
						OpenStax. Retrieved October 28, 2021, from
						<ReferenceLink href='https://openstax.org/books/university-physics-volume-2/pages/5-4-electric-field'>
							https://openstax.org/books/university-physics-volume-2/pages/5-4-electric-field
						</ReferenceLink>
					</ReferenceItem>
					<ReferenceItem>
						5.3 Coulomb’s Law - University Physics Volume 2 | OpenStax. (n.d.).
						OpenStax. Retrieved October 28, 2021, from
						<ReferenceLink href='https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law'>
							https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law
						</ReferenceLink>
					</ReferenceItem>
					<ReferenceItem>
						Superposition Principle and Continuous Charge Distribution. (n.d.).
						BYJUS. Retrieved October 28, 2021, from
						<ReferenceLink href='https://byjus.com/physics/superposition-principle-and-continuous-charge-distribution/'>
							https://byjus.com/physics/superposition-principle-and-continuous-charge-distribution/
						</ReferenceLink>
					</ReferenceItem>
				</ReferenceList>
			</Section>
		</Modal>
	);
};

const CenteredParagraph = styled(Paragraph)`
	text-align: center;
`;

const Divisor = styled.hr`
	margin: 0 auto 16px;
`;

const ImageWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 16px 0;
`;

const LatexWrapper = styled.span`
	.katex {
		color: var(--text-color);
		font-size: 1.25rem;
	}
`;

const TableOfContent = styled.section`
	margin-bottom: 16px;
	display: flex;
`;

const Navigation = styled.nav`
	display: flex;
`;

const NavigationTitle = styled.h3`
	font-weight: bold;
	text-transform: uppercase;
`;

const NavigationItem = styled.li`
	list-style-type: none;
	color: var(--primary-color);

	&::before {
		content: '◆';
		padding: 8px;
	}

	&:last-of-type::after {
		content: '◆';
		padding-left: 8px;
	}
`;

const NavigationLink = styled.a`
	text-decoration: none;
	color: var(--accent-color);

	&:hover {
		text-decoration: underline;
	}
`;

const Section = styled.section`
	margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
	font-size: 1.25rem;
	font-weight: bold;
	color: var(--primary-color);
	margin-bottom: 8px;
`;

const ReferenceList = styled.ol`
	padding-left: 32px;
`;

const ReferenceItem = styled.li`
	line-height: 1.25;
	list-style-type: decimal;
	margin-top: 4px;
	margin-bottom: 4px;
`;

const ReferenceLink = styled.a`
	color: var(--accent-color);

	&:hover {
		color: var(--primary-color);
	}
`;

export default ContentModal;
