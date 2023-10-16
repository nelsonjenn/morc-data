import { Box, Button } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
	Legend,
	XAxis,
	YAxis,
	Line,
	ComposedChart,
} from 'recharts';
import { useEffect, useState } from 'react';

import allTheData from '../data/trail_data.json';

export type ParkValueData = {
	park: string;
	value: number;
};

export type TrailData = {
	park: string;
	volunteer: number;
	favorite: number;
	ride: number;
};

export default function AboutTheTrails() {
	const [displayTableData, setDisplayTableData] = useState(false);
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<TrailData[]>([]);

	let graphData: TrailData[] = [];

	const handleClick = () => {
		setDisplay(!display);
		setDisplayTableData(false);
	};

	useEffect(() => {
		graphData = allTheData as unknown as TrailData[];

		setData(graphData);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',

				width: '100%',
			}}
		>
			<Button onClick={handleClick}>About the trails?</Button>
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
									top: 5,
									right: 30,
									left: 5,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='park' />
								<YAxis />
								<Tooltip />
								<Legend />

								<Bar
									dataKey='volunteer'
									stackId='a'
									fill='#0096FF'
								/>

								<Bar
									dataKey='ride'
									stackId='a'
									fill='#82ca9d'
								/>
								<Line
									type='monotone'
									dataKey='favorite'
									stroke='#301934'
								/>
							</ComposedChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
