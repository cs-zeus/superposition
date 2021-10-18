import { AppProps } from 'next/app';
import GlobalStyles from '../components/styles/GlobalStyles';
import InteractiveCustomStyles from '../components/styles/InteractiveCustomStyles';
import InteractiveDefaultStyles from '../components/styles/InteractiveDefaultStyles';
import KatexCustomeStyles from '../components/styles/KatexCustomeStyles';
import ResetStyles from '../components/styles/ResetStyles';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Component {...pageProps} />
			<ResetStyles />
			<GlobalStyles />
			<InteractiveDefaultStyles />
			<InteractiveCustomStyles />
      <KatexCustomeStyles />
		</>
	);
};

export default App;
