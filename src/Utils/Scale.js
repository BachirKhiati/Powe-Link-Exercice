import { initMaxRes } from '../Constants/Data';
import { defaultMargin } from '../Constants/Styles';

/**
 * scale graph between 400-800// optimal range for most screen resolution.
 * @param size
 * @returns {number}
 */
function scaleGraphRes(size) {
	return size < 400 ? 400 : size > 800 ? 800 : size;
}

/**
 * @param size
 * @param maxValue
 * @param minValue
 * @param res:  graph resolution
 * @returns {number} return scaled radius value matching the graphs scale.
 */
function scaleReachSize(size, maxValue, minValue, res = initMaxRes) {
	return (size * (res - defaultMargin * 2)) / (maxValue - minValue);
}

/**
 *
 *
 * @param size
 * @param res: graph resolution
 * @returns {number} return scaled station/device point size
 */
function scalePointSize(size, res = initMaxRes) {
	return (res / initMaxRes) * size;
}

export { scaleGraphRes, scaleReachSize, scalePointSize };
