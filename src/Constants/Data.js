const navBarData = [
	{
		title: 'home',
		path: '/',
	},
	{
		title: 'graph',
		path: '/',
	},
];

const initStationsPosition = [
	[0, 0, 10],
	[20, 20, 5],
	[10, 0, 12],
];
const initDevicesPosition = [
	[0, 0],
	[100, 100],
	[15, 10],
	[18, 18],
];
const initMaxRange = 0;
const initMinRange = -20;
const initMaxRes = 600;
const initGraphData = {
	x: 0,
	y: 0,
	label: '',
	style: {
		fontSize: 14,
		fontWeight: 800,
		fill: 'black',
		stroke: 'white',
		strokeWidth: 0.5,
	},
	isStation: false,
};
const initPowerLinkData = {
	hasLink: false,
	xDevice: 0,
	yDevice: 0,
	stations: [],
	power: 0,
};

export {
	navBarData,
	initStationsPosition,
	initDevicesPosition,
	initGraphData,
	initPowerLinkData,
	initMaxRange,
	initMinRange,
	initMaxRes,
};
