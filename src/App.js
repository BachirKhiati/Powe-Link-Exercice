import React, { useCallback, useEffect } from 'react';
import {
	initStationsPosition,
	initDevicesPosition,
	initMaxRange,
	initMinRange,
} from './Constants/Data';
import { useGraphState } from './State/useGraph';
import { useRange } from './State/useRange';
import { useWidthState } from './State/useWidthState';
import Loader from './Components/Loading';
import { usePowerState } from './State/usePower';
import { findBestLink } from './Utils/Power';
import Graph from './Components/Graph';
import Hint from './Components/Hint';
import NavBar from './Components/NavBar';

import './Styles/App.css';

function App() {
	let width = useWidthState();

	//max/min graph range will dynamically based the station/device coordinates.
	const rangeState = useRange(initMaxRange, initMinRange);
	const [maxValue, minValue] = rangeState;

	//graph
	const [stationsPos] = useGraphState(
		rangeState,
		initStationsPosition,
		'S',
		20,
		true
	);
	const [devicesPos] = useGraphState(
		rangeState,
		initDevicesPosition,
		'D',
		5,
		false
	);

	//power link state / calculation.
	const [powerLinks, setPowerLinks] = usePowerState([]);

	async function fetchData() {
		// delay to mimic fetch api response time
		await new Promise(resolve => setTimeout(resolve, 1000));
		setPowerLinks(
			findBestLink(
				devicesPos,
				stationsPos.map(({ data }) => data)
			)
		);
	}
	const dispatch = useCallback(fetchData, []);

	useEffect(() => {
		dispatch();
	}, [dispatch]);
	return (
		<div className="App">
			{!(Array.isArray(powerLinks) && powerLinks.length) ? (
				<Loader size={'big'} strokeWidth={'3'} />
			) : (
				<>
					<NavBar />
					<div className={'main'}>
						<Graph
							{...{
								devicesPos,
								stationsPos,
								maxValue,
								minValue,
								width,
							}}
						/>
						<Hint powerLinks={powerLinks} />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
