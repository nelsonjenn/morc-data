import { useEffect, useState } from 'react';

import favoriteTrail from '../data/favoriteMORCtrailByGender.json';

import { Box, Button, Typography, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	ComposedChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Bar,
	Tooltip,
	LabelList,
} from 'recharts';

export type FavoriteTrailData = {
	park: string;
	Female: number;
	Male: number;
	Nonbinary: number;
	Other: number;
};

export default function FavoriteMORCbyGender() {
	const [display, setDisplay] = useState<boolean>();
	const theme = useTheme();
	const [data, setData] = useState<FavoriteTrailData[]>(favoriteTrail);
	const [graphData, setGraphData] = useState<FavoriteTrailData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');

	const handleClick = () => {
		setDisplay(!display);
	};
	useEffect(() => {
		setQuestionText('What is your favorite MORC trail? - By Gender');
		const temp = data.map((trail) => ({
			...trail,
			Female: +(trail.Female / 106).toFixed(2) * 100,
			Male: +(trail.Male / 325).toFixed(2) * 100,
		}));
		setGraphData(temp);
	}, []);

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
					<Typography>
						These are percentages of all Woman / Men. Such that, the
						raw data is divided by the total number of that gender.
						So, if we have 100 men and 100 women answer the survey,
						these are the results.
					</Typography>
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
								data={graphData}
								margin={{
									top: 5,
									right: 30,
									left: 5,
									bottom: 100,
								}}
							>
								<CartesianGrid strokeDasharray='3 3' />

								<YAxis />
								<Bar
									dataKey='Female'
									fill={theme.palette.primary.main}
								></Bar>
								<Bar
									dataKey='Male'
									fill={theme.palette.primary.dark}
								>
									<LabelList
										dataKey='park'
										position='bottom'
										offset={10}
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
