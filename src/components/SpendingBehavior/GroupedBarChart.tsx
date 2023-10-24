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
					height: '500px',
				}}
			>
				<Card>
					<Typography variant='h5'>{questionText}</Typography>
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
					</ResponsiveContainer>
				</Card>
			</Box>
		</Box>
	);
}
