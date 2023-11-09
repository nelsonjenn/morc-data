import { useEffect, useState } from 'react';
import travel from '../data/travelTrail.json';

import BarChartOpen from '../BarChartOpen';
import { BarChartData } from '../../types/BarChart.type';
import { Card, Box, Typography, Button } from '@mui/material';
import LocalBar from './LocalBar';
import GasStation from './GasStation';

export type GraphData = {
	name: string;
	value: number;
	fullMark: number;
};

export default function TravelToTrail() {
	const [data, setData] = useState<BarChartData[]>(travel);
	const [questionText, setQuestionText] = useState<string>('');
	const [display, setDisplay] = useState<boolean>(false);

	const handleClick = () => {
		setDisplay(!display);
	};
	useEffect(() => {
		setQuestionText(
			'How far do you travel to get to your most frequently visited trail?'
		);
	}, []);

	return (
		<>
			<Button onClick={handleClick}>{questionText}</Button>
			{display && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignContent: 'center',
						alignItems: 'center',
						width: '50%',
					}}
				>
					<Card>
						<BarChartOpen
							questionText={questionText}
							data={data}
						/>
					</Card>

					<Card>
						<LocalBar />
					</Card>
					<Card>
						<GasStation />
					</Card>
				</Box>
			)}
		</>
	);
}
