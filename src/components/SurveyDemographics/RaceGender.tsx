import { Box, Button, Card } from '@mui/material';

import { useState } from 'react';

import gender from '../data/gender_data.json';
import race from '../data/race_data.json';
import volunteer from '../data/volunteered.json';
import BarChartOpen from '../BarChartOpen';

export type Data = {
	answer: string;
	value: number;
};

export default function RaceGender() {
	const [display, setDisplay] = useState(false);
	const [dataRace, setDataRace] = useState<Data[]>(race);
	const [dataGender, setDataGender] = useState<Data[]>(gender);
	const [dataVolunteer, setDataVolunteer] = useState<Data[]>(volunteer);

	const handleClick = () => {
		setDisplay(!display);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Button onClick={handleClick}>Who answered the survey?</Button>
			{display && (
				<>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							height: '400',
						}}
					>
						<Card sx={{ width: '33%' }}>
							<BarChartOpen
								questionText='Gender'
								data={dataGender}
							/>
						</Card>
						<Card sx={{ width: '33%' }}>
							<BarChartOpen
								questionText='Race'
								data={dataRace}
							/>
						</Card>
						<Card sx={{ width: '33%' }}>
							<BarChartOpen
								questionText='Have you Volunteered?'
								data={dataVolunteer}
							/>
						</Card>
					</Box>
				</>
			)}
		</Box>
	);
}
