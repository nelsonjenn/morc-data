import { useEffect, useState } from 'react';
import events from '../data/events.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function Events() {
	const [data, setData] = useState<BarChartData[]>(events);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText(
			'How many of the following events did you participate in last year?'
		);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
