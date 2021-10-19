import { AppProps } from 'next/app';
import 'katex/dist/katex.min.css';
import GlobalStyles from '../components/styles/GlobalStyles';
import InteractiveCustomStyles from '../components/styles/InteractiveCustomStyles';
import InteractiveDefaultStyles from '../components/styles/InteractiveDefaultStyles';
import KatexCustomStyles from '../components/styles/KatexCustomStyles';
import ResetStyles from '../components/styles/ResetStyles';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Component {...pageProps} />
			<ResetStyles />
			<GlobalStyles />
			<InteractiveDefaultStyles />
			<InteractiveCustomStyles />
			<KatexCustomStyles />
		</>
	);
};

export default App;
