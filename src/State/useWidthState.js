import { useState, useEffect } from 'react';
import { scaleGraphRes } from '../Utils/Scale';

const getWidth = () =>
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

export function useWidthState() {
	// save current graph resolution.
	let [graphRes, setGraphRes] = useState(scaleGraphRes(getWidth() / 2));

	useEffect(() => {
		// timeoutId for debounce mechanism
		let timeoutId = null;
		const resizeListener = () => {
			// prevent execution of previous setTimeout
			clearTimeout(timeoutId);
			// min/max res for the graph
			let currentWidth = scaleGraphRes(getWidth() / 2);

			// change width from the state object after 100 milliseconds
			timeoutId = setTimeout(() => setGraphRes(currentWidth), 100);
		};

		// set resize listener
		window.addEventListener('resize', resizeListener);

		// clean up function
		return () => {
			// remove resize listener
			window.removeEventListener('resize', resizeListener);
			clearTimeout(timeoutId);
		};
	}, []);

	return graphRes;
}
