import React from 'react';
import { LabelSeries, MarkSeries, XAxis, XYPlot, YAxis } from 'react-vis';
import { colors, margin, styleTick } from '../Constants/Styles';
import { initMaxRes } from '../Constants/Data';
import { scalePointSize, scaleReachSize } from '../Utils/Scale';

const Graph = ({
	devicesPos,
	stationsPos,
	maxValue,
	minValue,
	width = initMaxRes,
}) => {
	return (
		<>
			<XYPlot
				margin={margin}
				yDomain={[maxValue, minValue]}
				xDomain={[minValue, maxValue]}
				animation={'wobbly'}
				width={width}
				height={width}
			>
				<XAxis
					title={'X'}
					on0={true}
					style={styleTick}
					tickFormat={v => `${Math.abs(v)}`}
					tickSize={2}
				/>
				<YAxis
					title={'Y'}
					on0={true}
					orientation="left"
					style={styleTick}
					tickFormat={v => `${Math.abs(v)}`}
					tickSize={3}
				/>

				{stationsPos.map(({ size, data }, index) => (
					<MarkSeries
						key={'station' + index}
						color={colors.lightBlue}
						data={[data]}
						size={scaleReachSize(size, maxValue, minValue, width)}
					/>
				))}
				<MarkSeries
					color={colors.blue}
					size={scalePointSize(8, width)}
					data={[...stationsPos]}
					opacity={'1'}
				/>
				<MarkSeries
					color={colors.lightGreen}
					strokeWidth={1}
					stroke={colors.lightBlue}
					size={scalePointSize(4, width)}
					data={[...devicesPos]}
					opacity={'1'}
				/>

				<LabelSeries
					labelAnchorX={'middle'}
					allowOffsetToBeReversed
					data={[
						...devicesPos,
						...stationsPos.map(({ data }) => data),
					]}
				/>
			</XYPlot>
		</>
	);
};

export default Graph;
