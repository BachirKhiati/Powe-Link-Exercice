import { initPowerLinkData } from '../Constants/Data';

export function calculatePower(distance, reach) {
	if (reach > distance) {
		return Math.pow(reach - distance, 2);
	} else {
		return 0;
	}
}

/**
 * Calculate distance - pythagorean theorem
 * @param xDevice
 * @param yDevice
 * @param xStation
 * @param yStation
 * @returns {number}
 */
export function calcDistance(xDevice, yDevice, xStation, yStation) {
	if (xDevice === xStation && yDevice === yStation) {
		return 0;
	} else {
		return Math.hypot(xStation - xDevice, yStation - yDevice);
	}
}

/**
 *	create power link data for each device.
 * @param reducer
 * @param power
 * @param xDevice
 * @param yDevice
 * @param xStation
 * @param yStation
 * @returns {object} return links found.
 */
function createLinkData(reducer, power, xDevice, yDevice, xStation, yStation) {
	//check case when we have multiple power link with same value.
	const maxPowerValue = reducer.power || 0;
	if (power && power > maxPowerValue) {
		//case 1: power link higher then previous stations power level and not equal 0.
		reducer = {
			...reducer,
			hasLink: true,
			stations: [{ x: xStation, y: yStation }],
			power,
		};
	} else if (power && power === maxPowerValue) {
		//case 2: power link is equal to a previous station mapped and not equal 0.
		reducer.stations.push({ x: xStation, y: yStation });
	}
	return reducer;
}

/**
 *	map stations position and calculate the power link related to each station.
 * @param xDevice
 * @param yDevice
 * @param stationsPos
 * @returns {object} return station/s with higher power link.
 */
export function getPowerLinks(xDevice, yDevice, stationsPos) {
	return stationsPos.reduce(
		(reducer, { x: xStation, y: yStation, reach }) => {
			const distance = calcDistance(xDevice, yDevice, xStation, yStation);
			const power = calculatePower(distance, reach);
			return createLinkData(
				reducer,
				power,
				xDevice,
				yDevice,
				xStation,
				yStation
			);
		},
		{ ...initPowerLinkData, xDevice, yDevice }
	);
}

/**
 *	find the best power link for each device
 * @param devicesPos
 * @param stationsPosData
 * @returns {array} return devices link data.
 */
export const findBestLink = (devicesPos, stationsPosData) => {
	if (Array.isArray(devicesPos) && Array.isArray(stationsPosData)) {
		return devicesPos.map(({ x, y }) => {
			return getPowerLinks(x, y, stationsPosData);
		});
	}
	return [];
};
