import { Box, Button } from '@mui/material';
import exportData from '../data/whatDoYouRide.json';
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

export type Bikes = {
	bike: string;
	value: number;
};

export type GraphData = {
	name: string;
	value: number;
	fullMark: number;
};

export default function WhatDoYouRide() {
	const [data, setData] = useState<Bikes[]>([]);
	const [display, setDisplay] = useState<boolean>(false);
	const theme = useTheme();
	let graphData: GraphData[] = [];

	const fillGraph = (data: Bikes[]) => {
		graphData = data.map((row) => {
			return { name: row.bike, value: row.value, fullMark: 200 };
		});
		return graphData;
	};

	useEffect(() => {
		const importData = exportData as Bikes[];
		setData(importData);
		const graphData = fillGraph(importData);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignContent: 'center',
				alignItems: 'center',
				width: '50%',
			}}
		>
			<Button>What Do We Ride?</Button>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					padding: '20px',
					width: '90%',
					height: '400px',
				}}
			>
				<ResponsiveContainer
					width='100%'
					height='100%'
				>
					<RadarChart
						cx='50%'
						cy='50%'
						outerRadius='80%'
						data={data}
					>
						<PolarGrid />
						<Tooltip />
						<PolarAngleAxis dataKey='bike' />

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
		</Box>
	);
}
