import WordCloud from 'react-d3-cloud';
import { Box, Button, Card, Chip, useTheme } from '@mui/material';
import data from '../data/non_morc_trails.json';
import { useEffect, useState } from 'react';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import BarChartOpen from '../BarChartOpen';
import { BarChartData } from '../../types/BarChart.type';
import {
	Bar,
	CartesianGrid,
	ComposedChart,
	LabelList,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { theme } from '../../theme/theme';
export type WordCloudData = {
	text: string;
	value: number;
};

export default function FavoriteNonMORCTrailGraph() {
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
				value: d.value / 10,
			};
		});
		const barChartData = temp;
		setBarChartData(barChartData);
	}, []);

	return (
		<>
			<Button onClick={handleClick}>Favorite Non MORC Trail</Button>
			{display && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '90%',
						alignItems: 'center',
						alignContent: 'center',
						boxShadow: '3',
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
								sx={{ margin: '5px' }}
							/>
						))}
					</Card>
				</Box>
			)}
		</>
	);
}
