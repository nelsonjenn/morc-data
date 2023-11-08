import { useEffect, useState } from 'react';
import satisfaction from '../data/morcSatisfaction.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function GroupRidingSize() {
	const [data, setData] = useState<BarChartData[]>(satisfaction);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText(
			'Rate your overall satisfaction with the services MORC provides'
		);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
