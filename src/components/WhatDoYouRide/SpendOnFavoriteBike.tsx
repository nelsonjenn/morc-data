import { Box, Button, Card, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
} from 'recharts';
import { useEffect, useState } from 'react';

import spendData from '../data/spendOnBikes.json';

export type BikeSpendData = {
	answer: string;
	value: number;
};

export default function SpendOnFavoriteBike() {
	const theme = useTheme();
	const [data, setData] = useState<BikeSpendData[]>([]);

	useEffect(() => {
		const graphData = spendData as unknown as BikeSpendData[];

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
			<Button>
				How much did you spend on the bike you ride most often?
			</Button>

			<Card
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					height: '510px',
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
						<PolarAngleAxis dataKey='answer' />
						<Radar
							name='value'
							dataKey='value'
							stroke='black'
							fill={theme.palette.primary.dark}
							fillOpacity={0.6}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</Card>
		</Box>
	);
}
