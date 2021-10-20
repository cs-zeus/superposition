import Head from 'next/head';
import type { NextPage } from 'next';
import SimulationPane from '../components/SimulationPane/SimulationPane';
import { TestCharge } from 'cs-zeus';
import styled from '@emotion/styled';
import { useAppConfig } from '../hooks/useAppConfig';
import { usePointCharges } from '../hooks/usePointCharges';
import CalculationResultSection from '../components/ConfigurationPane/CalculationResultSection';
import Footer from '../components/ConfigurationPane/Footer';
import EditDeleteChargesSection from '../components/ConfigurationPane/EditDeleteChargesSection';

const Home: NextPage = () => {
	const {
		appConfig,
		toggleGridLineHandler,
		openModalHandler,
		closeModalHandler,
	} = useAppConfig();

	const {
		pointCharges,
		addPointChargeHandler,
		editChargeHandler,
		editPositionHandler,
		removePointChargeHandler,
	} = usePointCharges();
	const charges = pointCharges.filter(
		(charge) => charge.name !== 'Test Charge'
	);
	const testCharge = pointCharges.filter(
		(charge) => charge.name === 'Test Charge'
	)[0] as TestCharge;
	return (
		<>
			<Head>
				<title>Superposition</title>
				<meta
					name='description'
					content='A simulation for superposition principle in electric field and electric force.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Wrapper>
				<LeftPane>
					<SimulationPane
						appConfig={appConfig}
						charges={charges}
						testCharge={testCharge}
						onChargePositionUpdate={editPositionHandler}
					/>
				</LeftPane>
				<RightPane>
					ConfigurationPane
					<EditDeleteChargesSection
						charges={charges}
						onEditHandler={editChargeHandler}
						onDeleteHandler={removePointChargeHandler}
					/>
					<CalculationResultSection charges={charges} testCharge={testCharge} />
					<Footer onClickExplanationLink={openModalHandler} />
				</RightPane>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	position: fixed;
	width: 100%;
`;

const LeftPane = styled.div`
	flex: 75;
`;

const RightPane = styled.div`
	flex: 25;
	overflow: auto;
`;

export default Home;
