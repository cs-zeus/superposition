import { AppConfig } from '../types/AppConfig';
import Head from 'next/head';
import type { NextPage } from 'next';
import { PointCharge } from 'cs-zeus';
import SimulationPane from '../components/SimulationPane/SimulationPane';
import { useState } from 'react';

const Home: NextPage = () => {
	const initialAppConfig: AppConfig = {
		hasGridLineEnabled: true,
		isShowModal: false,
	};

	const [charges, setCharges] = useState<PointCharge[]>([
		{ name: 'Test Charge', position: { x: 1, y: 1 }, q: -1 },
		{ name: 'Charge 1', position: { x: 0, y: 0 }, q: 1 },
	]);
	const [appConfig, setAppConfig] = useState<AppConfig>(initialAppConfig);

	const addPointChargeHandler = (charge: PointCharge) => {
		setCharges((prev) => [...prev, charge]);
	};

	const editChargeHandler = (charge: PointCharge) => {
		setCharges((prev) => [
			...prev.filter((c) => c.name !== charge.name),
			charge,
		]);
	};

	const editPositionHandler = (charge: PointCharge) => {
		setCharges((prev) => [
			...prev.filter((c) => c.name !== charge.name),
			charge,
		]);
	};

	const removePointChargeHandler = (chargeName: string) => {
		setCharges((prev) => prev.filter((charge) => charge.name !== chargeName));
	};

	const toggleGridLineHandler = () => {
		setAppConfig((prev) => ({
			...prev,
			hasGridLineEnabled: !prev.hasGridLineEnabled,
		}));
	};

	const openModalHandler = () => {
		setAppConfig((prev) => ({ ...prev, isShowModal: true }));
	};

	const closeModalHandler = () => {
		setAppConfig((prev) => ({ ...prev, isShowModal: false }));
	};

	return (
		<div>
			<Head>
				<title>Superposition</title>
				<meta
					name='description'
					content='A simulation for superposition principle in electric field and electric force.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<SimulationPane
				appConfig={appConfig}
				charges={charges.filter((charge) => charge.name !== 'Test Charge')}
				testCharge={
					charges.filter((charge) => charge.name === 'Test Charge')[0]
				}
			/>
		</div>
	);
};

export default Home;
