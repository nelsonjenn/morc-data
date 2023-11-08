import { useEffect, useState } from 'react';
import travel from '../data/travelTrail.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function TravelToTrail() {
	const [data, setData] = useState<BarChartData[]>(travel);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText(
			'How far do you travel to get to your most frequently visited trail?'
		);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
