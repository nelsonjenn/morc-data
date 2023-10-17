import { useEffect, useState } from 'react';
import purchaseData from '../data/newBike.json';
import { BarChartData } from '../../types/BarChart.type';
import BarChart from '../BarChart';

export default function PurchaseNewBike() {
	const [data, setData] = useState<BarChartData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		const graphData = purchaseData as unknown as BarChartData[];
		setQuestionText('When did you last get a new bike?');
		setData(graphData);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
