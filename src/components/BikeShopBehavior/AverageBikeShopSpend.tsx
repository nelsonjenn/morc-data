import { useEffect, useState } from 'react';
import spend from '../data/bikeShopSpending.json';
import BarChartOpen from '../BarChartOpen';
import { BarChartData } from '../../types/BarChart.type';

export default function AverageBikeShopSpend() {
	const [data, setData] = useState<BarChartData[]>(spend);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText(
			'How much do you spend in an average trip to your local bike shop?'
		);
	}, []);

	return (
		<BarChartOpen
			questionText={questionText}
			data={data}
		/>
	);
}
