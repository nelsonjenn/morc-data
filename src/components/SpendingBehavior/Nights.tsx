import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import nightsData from '../data/howManyNights.json';
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
		const graphData = nightsData as unknown as BarChartData[];
		setQuestionText('How many nights is your average bike-centric trip?');
		setData(graphData);
	}, []);

	return (
		<GroupedBarChart
			questionText={questionText}
			data={data}
			barColor={theme.palette.primary.main}
		/>
	);
}
