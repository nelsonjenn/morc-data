import { useEffect, useState } from 'react';
import webpage from '../data/visitWebpage.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function VisitWebPage() {
	const [data, setData] = useState<BarChartData[]>(webpage);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText('How often do you visit the MORC webpage?');
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
