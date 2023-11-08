import { useEffect, useState } from 'react';

import skill from '../data/ability.json';

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
	ability: string;
	Female: number;
	Male: number;
	Nonbinary: number;
	Other: number;
};

export default function Abililty() {
	const [display, setDisplay] = useState<boolean>();
	const theme = useTheme();
	const [data, setData] = useState<TrailData[]>(skill);
	const [graphData, setGraphData] = useState<TrailData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');

	const handleClick = () => {
		setDisplay(!display);
	};
	useEffect(() => {
		setQuestionText(
			'On a scale of 1-10, how would you rate your riding level?'
		);
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
					<Typography sx={{ alignContent: 'center' }}>
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
									top: 50,
									right: 30,
									left: 5,
									bottom: 10,
								}}
								barCategoryGap='10'
							>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis
									dataKey='ability'
									interval={0}
									height={100}
								/>
								<YAxis />
								<Bar
									dataKey='Female'
									fill={theme.palette.primary.main}
								>
									<LabelList
										dataKey='Female'
										position='top'
										offset={10}
									/>
								</Bar>
								<Bar
									dataKey='Male'
									fill={theme.palette.primary.dark}
								>
									<LabelList
										dataKey='Male'
										position='top'
										offset={10}
									/>
								</Bar>
							</ComposedChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
