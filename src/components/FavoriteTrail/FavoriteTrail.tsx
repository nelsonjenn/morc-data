import { Box, Button } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	Radar,
} from 'recharts';
import { useEffect, useState } from 'react';
import exportData from '../data/favorite_data.json';
import { theme } from '../../theme/theme';

export type FavoriteTrailData = {
	park: string;
	value: number;
};

export default function FavoriteTrail() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<FavoriteTrailData[]>([]);

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const importData = exportData as FavoriteTrailData[];
		setData(importData);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Button onClick={handleClick}>What is our Favorite Trail?</Button>
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
								<PolarAngleAxis dataKey='park' />

								<Radar
									name='value'
									dataKey='value'
									stroke='black'
									fill={theme.palette.primary.main}
									fillOpacity={0.9}
								/>
							</RadarChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
