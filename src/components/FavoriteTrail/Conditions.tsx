import { useEffect, useState } from 'react';
import conditions from '../data/conditions.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function Conditions() {
	const [data, setData] = useState<BarChartData[]>(conditions);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText(
			"What's your preferred way to check trail conditions/openings?"
		);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
