import { useEffect, useState } from 'react';
import distance from '../data/how_far_drive.json';
import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function GroupRidingSize() {
	const [data, setData] = useState<BarChartData[]>(distance);
	const [questionText, setQuestionText] = useState<string>('');

	useEffect(() => {
		setQuestionText('How long are you willing to drive to get to a trail?');
	}, []);

	return (
		<BarChart
			questionText={questionText}
			data={data}
		/>
	);
}
