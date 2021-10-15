import { AppProps } from 'next/app';
import GlobalStyles from '../components/styles/ResetStyles';
import InteractiveCustomStyles from '../components/styles/InteractiveCustomStyles';
import InteractiveDefaultStyles from '../components/styles/InteractiveDefaultStyles';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Component {...pageProps} />
			<GlobalStyles />
			<InteractiveDefaultStyles />
			<InteractiveCustomStyles />
		</>
	);
};

export default App;
