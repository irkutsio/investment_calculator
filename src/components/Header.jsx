import logo from '../assets/investment-calculator-logo.png';

export const Header = () => {
	return <header id='header'>
		<img src={logo} alt="money logo" />
		<h1>Investment calculator</h1>
	</header>;
};
