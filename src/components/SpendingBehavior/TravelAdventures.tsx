import { Card, Box, Button } from '@mui/material';
import ModeOfTravel from './ModeOfTravel';
import Nights from './Nights';
import Travel from './Travel';
import { useState } from 'react';

export default function TravelAdventures() {
	const [display, setDisplay] = useState(false);

	const handleClick = () => {
		setDisplay(!display);
	};
	return (
		<>
			<Button onClick={handleClick}>
				What we said about travel bike adventures!
			</Button>
			{display && (
				<Box
					display='flex'
					flexDirection='row'
					alignContent='space-between'
				>
					<Card>
						<Travel />
					</Card>
					<Card>
						<Nights />
					</Card>
					<Card>
						<ModeOfTravel />
					</Card>
				</Box>
			)}
		</>
	);
}
