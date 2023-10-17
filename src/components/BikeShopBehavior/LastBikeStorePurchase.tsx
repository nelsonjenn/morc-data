import { Box, Button, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
	XAxis,
	YAxis,
	ComposedChart,
} from 'recharts';
import { useEffect, useState } from 'react';
import purchaseData from '../data/newBike.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function LastBikeStorePurchase() {
	const [data, setData] = useState<BarChartData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		const graphData = purchaseData as unknown as BarChartData[];
		setQuestionText(
			'When did you last make a purchase at a local bike shop?'
		);
		setData(graphData);
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
