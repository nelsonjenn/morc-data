import { Box, Button, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
	XAxis,
	YAxis,
	ComposedChart,
	Label,
	LabelList,
} from 'recharts';
import { useEffect, useState } from 'react';
import { BarChartData } from '../types/BarChart.type';

type barChartProps = {
	questionText: string;
	data: BarChartData[];
};

export default function BarChart({ questionText, data }: barChartProps) {
	const [graphData, setGraphData] = useState<BarChartData[]>([]);
	const theme = useTheme();

	useEffect(() => {
		setGraphData(data);
	}, [data]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Button>{questionText}</Button>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					height: '500px',
				}}
			>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<ComposedChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 5,
							bottom: 50,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />

						<XAxis
							dataKey='answer'
							orientation='bottom'
							tickLine={false}
						></XAxis>
						<YAxis />
						<Bar
							dataKey='value'
							label='Last New Bike'
							fill={theme.palette.primary.main}
						>
							<LabelList
								position='bottom'
								offset='-60'
								dataKey='answer'
								angle={-90}
								fill='#fff'
							/>
						</Bar>

						<Tooltip />
					</ComposedChart>
				</ResponsiveContainer>
			</Box>
		</Box>
	);
}
