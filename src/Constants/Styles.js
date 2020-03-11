const defaultMargin = 22;

const colors = {
	lightGreen: 'rgba(144,238,144,1)',
	blue: 'rgb(47,46,146)',
	lightBlue: 'rgba(47,46,146,0.25)',
	trans: 'rgba(107,107,118,0.45)',
};

const styleTick = {
	line: { stroke: colors.lightBlue },
	ticks: { fill: colors.lightBlue },
	text: { fontSize: 10, fill: colors.lightBlue, fontWeight: 600 },
	title: { fontSize: 10, fill: colors.lightBlue, fontWeight: 600 },
};

const margin = {
	top: defaultMargin,
	left: defaultMargin,
	right: defaultMargin,
	bottom: defaultMargin,
};

export { defaultMargin, styleTick, colors, margin };
