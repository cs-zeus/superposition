import { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Component {...pageProps} />
      <GlobalStyles />
		</>
	);
};

export default App;
