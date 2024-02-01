import { useState } from 'react';

export const UserInput = ({handleChange, userInput}) => {





	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						required
						value={userInput.initialInvestment}
						onChange={e => handleChange(Number(e.target.value), 'initialInvestment')}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						required
						value={userInput.annualInvestment}
						onChange={e => handleChange(Number(e.target.value), 'annualInvestment')}
					/>
				</p>
			</div>
			<div id="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						required
						value={userInput.expectedReturn}
						onChange={e => handleChange(Number(e.target.value), 'expectedReturn')}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						required
						value={userInput.duration}
						onChange={e => handleChange(Number(e.target.value), 'duration')}
					/>
				</p>
			</div>
		</section>
	);
};
