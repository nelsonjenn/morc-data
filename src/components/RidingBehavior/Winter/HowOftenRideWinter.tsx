import { Box, Button, Toolbar, useTheme } from '@mui/material';
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

import riding from '../../data/winterPercentage.json';
import { BarChartData } from '../../../types/BarChart.type';
import BarChart from '../../BarChart';

export default function HowOftenRideWinter() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<BarChartData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const graphData = riding as unknown as BarChartData[];
		setQuestionText(
			'What percentage of your cycling is winter/snow riding?'
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
