import { Box, Button, Card, Chip, Typography, useTheme } from '@mui/material';
import data from '../data/morcDoesWell.json';
import { useEffect, useState } from 'react';
import { BarChartData } from '../../types/BarChart.type';
import { Close } from '@mui/icons-material';
import DataModal from '../DataModal';

export default function MORCDoesWell() {
	const [display, setDisplay] = useState(false);
	const [questionText, setQuestionText] = useState<string>(
		'What do you think MORC does well?'
	);
	const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
	const theme = useTheme();
	const [chipData, setChipData] = useState<BarChartData[]>([]);

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const sortedData = data.sort((a, b) => b.value - a.value);

		const temp = sortedData.map((d) => {
			return {
				answer: d.text,
				value: d.value,
			};
		});
		const barChartData = temp;
		setBarChartData(barChartData);
		setChipData(barChartData);
	}, []);

	const handleDelete = (chipToDelete: BarChartData) => () => {
		setChipData((chips) =>
			chips.filter((chip) => chip.answer !== chipToDelete.answer)
		);
	};

	return (
		// <>
		// 	<Button onClick={handleClick}>{questionText}</Button>
		// 	{display && (
		// 		<Box
		// 			sx={{
		// 				display: 'flex',
		// 				flexDirection: 'column',
		// 				boxShadow: '3',
		// 				width: '90%',
		// 				alignItems: 'center',
		// 				alignContent: 'center',
		// 			}}
		// 		>
		// 			<Card sx={{ padding: '10px' }}>
		// 				<Typography>
		// 					<p>
		// 						According to ChatGPT, the top ten themes in
		// 						these results:
		// 					</p>
		// 					<li>Trail Maintenance: 46 mentions</li>
		// 					<li>Building Trails: 11 mentions</li>
		// 					<li>Maintaining Trails: 7 mentions</li>
		// 					<li>Community Engagement: 2 mentions</li>
		// 					<li>Communication: 4 mentions</li>
		// 					<li>Advocacy for Trails: 5 mentions</li>
		// 					<li>Signage: 2 mentions</li>
		// 					<li>Variety of Trails: 2 mentions</li>
		// 					<li>Trail Conditions/Updates: 2 mentions</li>
		// 					<li>Support for Local Trails: 2 mentions</li>
		// 				</Typography>
		// 			</Card>
		// 			<Card sx={{ padding: '10px' }}>
		// 				{chipData.map((data, index) => (
		// 					<Chip
		// 						key={index}
		// 						label={data.answer + ' : ' + data.value}
		// 						size='medium'
		// 						color={data.value > 1 ? 'primary' : 'secondary'}
		// 						variant='outlined'
		// 						onDelete={handleDelete(data)}
		// 						deleteIcon={<Close />}
		// 						sx={{
		// 							margin: '5px',
		// 							padding: '5px',
		// 							height: 'auto',
		// 							'& .MuiChip-label': {
		// 								display: 'block',
		// 								whiteSpace: 'normal',
		// 							},
		// 						}}
		// 					/>
		// 				))}
		// 			</Card>
		// 		</Box>
		// 	)}
		// </>
		<DataModal
			data={barChartData}
			questionText={questionText}
		/>
	);
}
