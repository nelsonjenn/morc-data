import { useEffect, useState } from 'react';

import ride from '../data/whereDoYouRideByGender.json';

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

export type TrailData = {
	park: string;
	Female: number;
	Male: number;
	Nonbinary: number;
	Other: number;
};

export default function RideMORCbyGender() {
	const [display, setDisplay] = useState<boolean>();
	const theme = useTheme();
	const [data, setData] = useState<TrailData[]>(ride);
	const [graphData, setGraphData] = useState<TrailData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');

	const handleClick = () => {
		setDisplay(!display);
	};
	useEffect(() => {
		setQuestionText('Which MORC trails have you ridden? - By Gender');
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
						{' '}
						These numbers are adjusted to assume that 100 men and
						100 women answered the survey.
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
								barCategoryGap='10'
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
