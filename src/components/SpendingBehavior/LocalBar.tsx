import { Box, Button, Typography } from '@mui/material';
import localBar from '../data/localBar.json';
import { useEffect, useState } from 'react';
import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';
import { useTheme } from '@mui/material';

export type OriginalData = {
	answer: string;
	value: number;
};

export type GraphData = {
	name: string;
	value: number;
	fullMark: number;
};

export default function LocalBar() {
	const [data, setData] = useState<OriginalData[]>(localBar);
	const theme = useTheme();
	const [graphData, setGraphData] = useState<GraphData[]>([]);

	const fillGraph = (data: OriginalData[]) => {
		const temp = data.map((row) => {
			return { name: row.answer, value: row.value, fullMark: 200 };
		});
		return temp;
	};

	useEffect(() => {
		const temp = fillGraph(localBar);
		setGraphData(temp);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				padding: '20px',
				width: '90%',
				height: '400px',
				alignContent: 'center',
				alignItems: 'center',
			}}
		>
			<Button>
				How often do you visit a local bar/restaurant when you travel to
				a MORC trail?
			</Button>
			<ResponsiveContainer
				width='100%'
				height='100%'
			>
				<RadarChart
					cx='50%'
					cy='50%'
					outerRadius='80%'
					data={graphData}
				>
					<PolarGrid />
					<Tooltip />
					<PolarAngleAxis dataKey='name' />

					<Radar
						name='value'
						dataKey='value'
						stroke='black'
						fill={theme.palette.primary.main}
						fillOpacity={0.8}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</Box>
	);
}
