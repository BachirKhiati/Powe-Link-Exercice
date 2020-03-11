import {
	initStationsPosition,
	initMinRange,
	initMaxRange,
} from '../Constants/Data';
import { findBestLink } from '../Utils/Power';
import { createGraphData } from '../State/useGraph';

const initStationsGraphData = createGraphData(
	[initMinRange, initMaxRange, () => {}, () => {}],
	initStationsPosition,
	'S',
	20,
	false
);

describe('Coordinates Test', () => {
	it('should find one best lLink', () => {
		const initialLinkPoint = createGraphData(
			[initMinRange, initMaxRange, () => {}, () => {}],
			[[0, 0]],
			'D',
			20,
			false
		);

		const link = findBestLink(initialLinkPoint, initStationsGraphData);

		expect(link.length).toEqual(1);
		expect(link.stations.length).toEqual(1);
		expect(link[0].hasLink).toBeTruthy();
	});

	it('should not find any Links', () => {
		const initialLinkPoint = createGraphData(
			[initMinRange, initMaxRange, () => {}, () => {}],
			[[100, 100]],
			'D',
			20,
			false
		);

		const link = findBestLink(initialLinkPoint, initStationsGraphData);

		expect(link.length).toEqual(1);
		expect(link.stations.length).toEqual(1);
		expect(link[0].hasLink).toBeFalsy();
	});

	it('should find more than one station Link', () => {
		const stationsPosition = [
			[0, 0, 20],
			[20, 0, 20],
		];
		const devicePositions = [[10, 0]];

		const stationsGraphData = createGraphData(
			[initMinRange, initMaxRange, () => {}, () => {}],
			stationsPosition,
			'S',
			20,
			false
		);
		const initialLinkPoint = createGraphData(
			[initMinRange, initMaxRange, () => {}, () => {}],
			devicePositions,
			'D',
			20,
			false
		);

		const link = findBestLink(initialLinkPoint, stationsGraphData);

		expect(link.length).toEqual(1);
		expect(link[0].stations.length).toEqual(2);
		expect(link[0].hasLink).toBeTruthy();
	});
});
