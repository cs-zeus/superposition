import Head from 'next/head';
import type { NextPage } from 'next';
import PrimaryButton from '../components/UI components/PrimaryButton';
const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Superposition</title>
				<meta name='description' content='A simulation for superposition principle in electric field and electric force.' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>
					Hello World
				</h1>
				<PrimaryButton>ADD</PrimaryButton>
			</main>
		</div>
	);
};

export default Home;
