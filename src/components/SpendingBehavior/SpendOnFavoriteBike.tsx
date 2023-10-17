import { Box, Button, useTheme } from '@mui/material';
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
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<BikeSpendData[]>([]);
	const theme = useTheme();
	const handleClick = () => {
		setDisplay(!display);
	};

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
			<Button onClick={handleClick}>
				How much did you spend on the bike you ride most often?
			</Button>
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
									fill={theme.palette.secondary.main}
									fillOpacity={0.6}
								/>
							</RadarChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
