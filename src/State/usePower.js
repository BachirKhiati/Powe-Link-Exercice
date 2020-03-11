import { useState } from 'react';

export function usePowerState(props = []) {
	const [powerLinks, setPowerLinks] = useState(props);
	return [powerLinks, setPowerLinks];
}
