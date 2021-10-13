import { PointCharge, TestCharge } from 'cs-zeus';

import { AppConfig } from '../types/AppConfig';
import Head from 'next/head';
import type { NextPage } from 'next';
import SimulationPane from '../components/SimulationPane/SimulationPane';
import styled from 'styled-components';
import { useAppConfig } from '../hooks/useAppConfig';
import { usePointCharges } from '../hooks/usePointCharges';

const Home: NextPage = () => {
	const [
		appConfig,
		toggleGridLineHandler,
		openModalHandler,
		closeModalHandler,
	] = useAppConfig();

	const [
		pointCharges,
		addPointChargeHandler,
		editChargeHandler,
		editPositionHandler,
		removePointChargeHandler,
	] = usePointCharges();

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
						appConfig={appConfig as AppConfig}
						charges={(pointCharges as PointCharge[]).filter(
							(charge) => charge.name !== 'Test Charge'
						)}
						testCharge={
							(pointCharges as PointCharge[]).filter(
								(charge) => charge.name === 'Test Charge'
							)[0] as TestCharge
						}
					/>
				</LeftPane>
				<RightPane>
					ConfigurationPane
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
