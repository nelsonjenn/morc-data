import { Box, Button, Card, Chip, useTheme } from '@mui/material';
import data from '../data/morcImprove.json';
import { useEffect, useState } from 'react';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { BarChartData } from '../../types/BarChart.type';
import { Close } from '@mui/icons-material';
import DataModal from '../DataModal';

export type WordCloudData = {
	text: string;
	value: number;
};

export default function MORCDoesWell() {
	const [graphData, setGraphData] = useState<WordCloudData[]>([]);
	const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
	const [display, setDisplay] = useState(false);
	const [questionText, setQuestionText] = useState<string>(
		'What Improvements Does MORC Need to Make?'
	);
	const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
	const [chipData, setChipData] = useState<BarChartData[]>([]);
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
		setChipData(barChartData);
	}, []);

	const handleDelete = (chipToDelete: BarChartData) => () => {
		setChipData((chips) =>
			chips.filter((chip) => chip.answer !== chipToDelete.answer)
		);
	};

	return (
		<DataModal
			data={barChartData}
			questionText={questionText}
		/>
	);
}
