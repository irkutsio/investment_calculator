import { useState } from 'react';
import { Header } from './components/Header';
import { Results } from './components/Results';
import { UserInput } from './components/UserInput';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const handleChange = (newValue, inputIdentifier) => {
		setUserInput(prev => {
			return {
				...prev,
				[inputIdentifier]: newValue,
			};
		});
	};

	const inputIsValid = userInput.duration >= 1;

	return (
		<>
			<Header />
			<UserInput handleChange={handleChange} userInput={userInput} />
			{inputIsValid && <Results input={userInput} />}
			{!inputIsValid && <p className="center">Please, enter a deration greater than zero </p>}
		</>
	);
}

export default App;
