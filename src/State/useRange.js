import { useState } from 'react';

export function useRange(initMaxValue, initMinValue) {
	const [maxRange, setMaxRange] = useState(initMaxValue);
	const [minRange, setMinRange] = useState(initMinValue);
	return [maxRange, minRange, setMaxRange, setMinRange];
}
