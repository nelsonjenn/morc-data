import { Box, Button, Card, Chip, useTheme } from '@mui/material';
import data from '../data/morcDoesWell.json';
import { useEffect, useState } from 'react';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { BarChartData } from '../../types/BarChart.type';

export type WordCloudData = {
	text: string;
	value: number;
};

export default function MORCDoesWell() {
	const [graphData, setGraphData] = useState<WordCloudData[]>([]);
	const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
	const [display, setDisplay] = useState(false);
	const [questionText, setQuestionText] = useState<string>(
		'Favorite Non MORC Trail'
	);
	const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const sortedData = data.sort((a, b) => b.value - a.value);
		setGraphData(sortedData);
		const temp = sortedData.map((d) => {
			return {
				answer: d.text,
				value: d.value,
			};
		});
		const barChartData = temp;
		setBarChartData(barChartData);
	}, []);

	return (
		<>
			<Button onClick={handleClick}>
				What do you think MORC does well?
			</Button>
			{display && (
				<Box
					sx={{
						display: 'flex',
						boxShadow: '3',
						width: '90%',
						alignItems: 'center',
						alignContent: 'center',
					}}
				>
					<Card sx={{ padding: '10px' }}>
						{barChartData.map((data, index) => (
							<Chip
								key={index}
								label={data.answer + ' : ' + data.value}
								size='medium'
								color={data.value > 1 ? 'primary' : 'secondary'}
								variant='outlined'
								sx={{
									margin: '5px',
									padding: '5px',
									height: 'auto',
									'& .MuiChip-label': {
										display: 'block',
										whiteSpace: 'normal',
									},
								}}
							/>
						))}
					</Card>
				</Box>
			)}
		</>
	);
}
