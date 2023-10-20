import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import modeTravel from '../data/preferredModeOfTravel.json';
import GroupedBarChart from './GroupedBarChart';
import { BarChartData } from '../../types/BarChart.type';

export type ServiceData = {
	answer: string;
	value: number;
};

export default function Nights() {
	const [data, setData] = useState<BarChartData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');
	const theme = useTheme();

	useEffect(() => {
		const graphData = modeTravel as unknown as BarChartData[];
		setQuestionText('What is your preferred mode of travel with bike(s)');
		setData(graphData);
	}, []);

	return (
		<GroupedBarChart
			questionText={questionText}
			data={data}
			barColor={theme.palette.secondary.main}
		/>
	);
}
