import { useEffect, useState } from 'react';
import visitBikeShop from '../data/visitBikeShop.json';
import BarChartOpen from '../BarChartOpen';
import { BarChartData } from '../../types/BarChart.type';

export default function VisitBikeShop() {
	const [data, setData] = useState<BarChartData[]>(visitBikeShop);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText('How often do you visit a local bike shop?');
	}, []);

	return (
		<BarChartOpen
			questionText={questionText}
			data={data}
		/>
	);
}
