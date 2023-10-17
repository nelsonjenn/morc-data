import { Box, Button } from '@mui/material';
import exportData from '../data/WhatDoYouRide.json';
import { useEffect, useState } from 'react';
import {
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
} from 'recharts';
import { useTheme } from '@mui/material/styles';

export type Bikes = {
	answer: string;
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
	let graphData: GraphData[] = [];
	const theme = useTheme();

	const fillGraph = (data: Bikes[]) => {
		graphData = data.map((row) => {
			return { name: row.answer, value: row.value, fullMark: 200 };
		});
		return graphData;
	};

	useEffect(() => {
		const importData = exportData as unknown as Bikes[];
		setData(importData);
		const graphData = fillGraph(importData);
	}, []);

	const handleClick = () => {
		setDisplay(!display);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Button onClick={handleClick}>What Do We Ride?</Button>
			{display && (
				<>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							padding: '20px',
							width: '100%',
							height: '500px',
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
									fill={theme.palette.secondary.main}
									fillOpacity={0.8}
								/>
							</RadarChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
