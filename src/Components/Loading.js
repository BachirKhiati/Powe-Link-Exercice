import React from 'react';

import '../Styles/LoadingStyle.css';

const SIZES = {
	big: '256px',
	default: '64px',
	small: '30px',
	tiny: '18px',
};

const STROKES = {
	big: 2,
	default: 3,
	small: 5,
	tiny: 8,
};

/**
 * Spinning circle loader with default UpCloud colors.
 *
 * @param size Size of the loader: default | big | small | tiny | any number
 * @param strokeWidth
 */
function Loader({ size = 'default', strokeWidth }) {
	let width;
	let height;

	if (typeof size === 'string' && SIZES[size]) {
		width = height = SIZES[size];
	} else if (typeof size === 'number') {
		width = size;
		height = size;
	}

	// tslint:disable-next-line:no-parameter-reassignment
	strokeWidth = strokeWidth || STROKES[size];

	return (
		<div className={'loader-container'}>
			<svg
				data-testid="loading"
				width={width}
				height={height}
				viewBox={'0 0 200 200'}
				xmlSpace="preserve"
				x="0px"
				y="0px"
			>
				<g>
					<path
						fill="none"
						stroke="#E51CB5"
						strokeWidth={strokeWidth}
						strokeMiterlimit="10"
						d="M138.768,100c0,21.411-17.356,38.768-38.768,38.768
		        c-21.411,0-38.768-17.356-38.768-38.768c0-21.411,17.357-38.768,38.768-38.768"
						dur="8s"
					/>
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="rotate"
						from="0 100 100"
						to="360 100 100"
						repeatCount="indefinite"
					/>
				</g>
				<g>
					<path
						fill="none"
						stroke="#C813E2"
						strokeWidth={strokeWidth}
						strokeMiterlimit="10"
						d="M132.605,100c0,18.008-14.598,32.605-32.605,32.605
		        c-18.007,0-32.605-14.598-32.605-32.605c0-18.007,14.598-32.605,32.605-32.605"
					/>
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="rotate"
						from="0 100 100"
						to="360 100 100"
						dur="4s"
						repeatCount="indefinite"
					/>
				</g>
				<g>
					<path
						fill="none"
						stroke="#9E31F4"
						strokeWidth={strokeWidth}
						strokeMiterlimit="10"
						d="M126.502,100c0,14.638-11.864,26.502-26.502,26.502
		        c-14.636,0-26.501-11.864-26.501-26.502c0-14.636,11.865-26.501,26.501-26.501"
					/>
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="rotate"
						from="0 100 100"
						to="360 100 100"
						dur="2s"
						repeatCount="indefinite"
					/>
				</g>
				<g>
					<path
						fill="none"
						stroke="#7847FC"
						strokeWidth={strokeWidth}
						strokeMiterlimit="10"
						d="M120.494,100c0,11.32-9.174,20.494-20.494,20.494
            c-11.319,0-20.495-9.174-20.495-20.494c0-11.319,9.176-20.495,20.495-20.495"
					/>
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="rotate"
						from="0 100 100"
						to="360 100 100"
						dur="1s"
						repeatCount="indefinite"
					/>
				</g>
			</svg>
		</div>
	);
}

export default Loader;
