import Head from 'next/head';
import type { NextPage } from 'next';
import SimulationPane from '../components/SimulationPane/SimulationPane';
import { TestCharge } from 'cs-zeus';
import styled from 'styled-components';
import { useAppConfig } from '../hooks/useAppConfig';
import { usePointCharges } from '../hooks/usePointCharges';

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
						charges={pointCharges.filter(
							(charge) => charge.name !== 'Test Charge'
						)}
						testCharge={
							pointCharges.filter(
								(charge) => charge.name === 'Test Charge'
							)[0] as TestCharge
						}
						onChargePositionUpdate={editPositionHandler}
					/>
				</LeftPane>
				<RightPane>ConfigurationPane</RightPane>
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
