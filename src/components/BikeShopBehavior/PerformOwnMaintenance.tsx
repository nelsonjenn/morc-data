import { useEffect, useState } from 'react';
import perform from '../data/performOwnMaintenance.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function PerformOwnMaintenance() {
	const [data, setData] = useState<BarChartData[]>(perform);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText('How often do you perform you own bike maintenance?');
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
