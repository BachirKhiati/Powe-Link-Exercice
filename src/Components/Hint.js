import React from 'react';
import '../Styles/TextStyle.css';

const Hint = ({ powerLinks }) => {
	return (
		<div data-testid="graph-data" className={'text-container'}>
			<ul>
				{Array.isArray(powerLinks) &&
					powerLinks.map(
						({ hasLink, xDevice, yDevice, stations, power }, i) => (
							<li key={'hint' + i}>
								{hasLink ? (
									<span>{`Best link station for point ${xDevice},${yDevice} is ${Array.isArray(
										stations
									) &&
										stations
											.map(({ x, y }) => `${x},${y}`)
											.join(
												' and '
											)} with power ${power.toFixed(
										3
									)}`}</span>
								) : (
									<span>{`No link station within reach for point ${xDevice},${yDevice}`}</span>
								)}
							</li>
						)
					)}
			</ul>
		</div>
	);
};
export default Hint;
