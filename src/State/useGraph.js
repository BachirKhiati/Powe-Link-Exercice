import { useState } from 'react';
import { initGraphData } from '../Constants/Data';

/**
 * #####################
 * from Range state
 * @param maxRange:
 * @param minRange. from Range state
 * @param setMaxRange
 * @param setMinRange
 * #####################
 * @param initStationsPosition: initial array given in the task
 * @param name: Station or Device
 * @param offset: used to position the text labels under each coordinates.
 * @param isStation: add size value to data, used to draw the reach circle.
 * #####################
 * @returns {*}
 */
export const createGraphData = (
	[maxRange, minRange, setMaxRange, setMinRange],
	initStationsPosition,
	name,
	offset,
	isStation
) => {
	// use last range values from state
	let min = minRange;
	let max = maxRange;
	// one loop to handle both min/max range and graph data.
	const stationsPosData = initStationsPosition.map(([x, y, reach], index) => {
		min = Math.min(min, Math.min(x, y));
		max = Math.max(max, Math.max(x, y));
		const data = {
			...initGraphData,
			x,
			y,
			reach,
			yOffset: -offset,
			label: `${name}${index + 1}`,
		};
		// size value used to draw the reach radius.
		return isStation ? { size: reach, data } : data;
	});

	min < minRange && setMinRange(min);
	max > maxRange && setMaxRange(max);
	return stationsPosData;
};

export function useGraphState(rangeState, props = [], name, offset, isStation) {
	const [coordinates, setCoordinates] = useState(
		createGraphData(rangeState, props, name, offset, isStation)
	);
	return [coordinates, setCoordinates];
}
