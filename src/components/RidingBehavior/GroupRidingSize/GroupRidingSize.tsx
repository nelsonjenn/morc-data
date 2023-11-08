import { useEffect, useState } from 'react';
import groupSize from '../../data/size_riding_group.json';
import BarChart from '../../BarChart';
import { BarChartData } from '../../../types/BarChart.type';

export default function GroupRidingSize() {
	const [data, setData] = useState<BarChartData[]>(groupSize);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText(
			'When you ride, how many people do you usually ride with?'
		);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
