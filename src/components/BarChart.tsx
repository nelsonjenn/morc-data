import { Box, Button, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
	XAxis,
	YAxis,
	ComposedChart,
	LabelList,
} from 'recharts';
import { useEffect, useState } from 'react';
import { BarChartData } from '../types/BarChart.type';

type barChartProps = {
	questionText: string;
	data: BarChartData[];
};

export default function BarChart({ questionText, data }: barChartProps) {
	const [display, setDisplay] = useState<boolean>();
	const [graphData, setGraphData] = useState<BarChartData[]>([]);
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

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
			<Button onClick={handleClick}>{questionText}</Button>
			{display && (
				<>
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
									top: 15,
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
									fill={theme.palette.primary.main}
								>
									<LabelList
										dataKey='answer'
										position='top'
									/>
								</Bar>
								<Tooltip />
							</ComposedChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
