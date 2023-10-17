import { useTheme } from '@mui/material';

import { useEffect, useState } from 'react';
import serviceData from '../data/lastService.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export type ServiceData = {
	answer: string;
	value: number;
};

export default function LastServiceAtShop() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<BarChartData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const graphData = serviceData as unknown as BarChartData[];
		setQuestionText('When did you last have your bike serviced at a shop?');
		setData(graphData);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
