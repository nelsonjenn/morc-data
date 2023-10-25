import { useEffect, useState } from 'react';
import purchaseData from '../data/newBike.json';
import { BarChartData } from '../../types/BarChart.type';
import BarChartOpen from '../BarChartOpen';
import { Box, Button, Card } from '@mui/material';

export default function PurchaseNewBike() {
	const [data, setData] = useState<BarChartData[]>([]);
	const [questionText, setQuestionText] = useState<string>('');
	const [display, setDisplay] = useState(false);

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const graphData = purchaseData as unknown as BarChartData[];
		setQuestionText('When did you last get a new bike?');
		setData(graphData);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Button onClick={handleClick}>{questionText}</Button>
			{display && (
				<Card>
					<BarChartOpen
						questionText={''}
						data={data}
					/>
				</Card>
			)}
		</Box>
	);
}
