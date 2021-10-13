import Head from 'next/head';
import type { NextPage } from 'next';
import SimulationPane from '../components/SimulationPane/SimulationPane';

const Home: NextPage = () => {
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
				appConfig={{
					hasGridLineEnabled: true,
					isShowModal: false,
				}}

				charges={[]}
			/>
		</div>
	);
};

export default Home;
