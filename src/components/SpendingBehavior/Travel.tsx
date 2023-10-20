import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import travelData from '../data/howOftenDoYouTravel.json';
import GroupedBarChart from './GroupedBarChart';
import { BarChartData } from '../../types/BarChart.type';

export type ServiceData = {
	answer: string;
	value: number;
};

export default function Travel() {
	const [data, setData] = useState<BarChartData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');
	const theme = useTheme();

	useEffect(() => {
		const graphData = travelData as unknown as BarChartData[];
		setQuestionText(
			'How often do you travel with an overnight stay for the purpose of cycling'
		);
		setData(graphData);
	}, []);

	return (
		<GroupedBarChart
			questionText={questionText}
			data={data}
			barColor={theme.palette.primary.light}
		/>
	);
}
