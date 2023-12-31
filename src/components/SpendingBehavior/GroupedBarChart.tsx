import { Box, Card, Typography, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
	XAxis,
	YAxis,
	ComposedChart,
} from 'recharts';
import { useEffect, useState } from 'react';
import { BarChartData } from '../../types/BarChart.type';

type barChartProps = {
	questionText: string;
	data: BarChartData[];
	barColor: string;
};

export default function BarChart({
	questionText,
	data,
	barColor,
}: barChartProps) {
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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<Card
					sx={{
						width: '300px',
						height: '300px',
						paddingRight: '5px',
					}}
				>
					<Typography>{questionText}</Typography>

					<ComposedChart
						width={300}
						height={250}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 5,
							bottom: 15,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='answer' />
						<YAxis />
						<Bar
							dataKey='value'
							label='Last New Bike'
							fill={barColor}
						/>

						<Tooltip />
					</ComposedChart>
				</Card>
			</Box>
		</Box>
	);
}
