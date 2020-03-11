import { calcDistance, calculatePower } from '../Utils/Power';

describe('Test Power utils', () => {
	describe('Test Distance', () => {
		it('Test should return the correct distance when points on different coordinates', () => {
			const points = [0, 0, 10, 10];
			expect(calcDistance(...points)).toEqual(14.142135623730951);
		});
		it('Test should return 0 when the point coordinates are in the same location', () => {
			const points = [0, 0, 0, 0];
			expect(calcDistance(...points)).toEqual(0);
		});

		it('Test should return the correct distance when the point is negative value', () => {
			const points = [-7, -4, 5, 5];
			expect(calcDistance(...points)).toEqual(15);
		});
	});

	describe('Test Power', () => {
		it('Test should return power higher than 0 when device location is the same as the station location', () => {
			expect(calculatePower(0, 5)).toBeGreaterThan(0);
		});

		it('Test should return power higher than 0 when device location is reach', () => {
			expect(calculatePower(3, 5)).toBeGreaterThan(0);
		});

		it('Test should return 0 when device location is out of reach', () => {
			expect(calculatePower(10, 5)).toEqual(0);
		});
	});
});
