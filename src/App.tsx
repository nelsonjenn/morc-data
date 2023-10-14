import { Box, Typography } from '@mui/material';
import FavoriteTrail from './components/FavoriteTrail/FavoriteTrail';
import { MorcProvider } from './components/morc-output-manager';
import HaveYouVolunteered from './components/HaveYouVolunteered/HaveYouVolunteered';
import WhatDoYouRide from './components/WhatDoYouRide/WhatDoYouRide';
import AboutTheTrails from './components/AboutTheTrails/AboutTheTrails';
import RidingBehavior from './components/RidingBehavior/RidingBehavior';
import Frequency from './components/RidingBehavior/Frequency/Frequency';
import OutstateRiding from './components/RidingBehavior/OutstateRiding';


export default function App() {
	return (
		<MorcProvider>
			<>
			<Box sx={{backgroundColor: '#071B22', height: '100px', width: '95vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: "#FFFFFF"}}>
				<Typography>MORC</Typography>
				</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignContent: 'center',
					alignItems: 'center',
					width: '90vw',
					height: '90vh',
					backgroundColor: '#f5f5f5',
					padding: '20px',
					
				}}>
				
				<h1>What the Survey Says about Volunteering, Riding the Trails</h1>
				<FavoriteTrail />
				<AboutTheTrails />
				<h1>About the Riders Who Answered the Survey</h1>
				<RidingBehavior />
				<WhatDoYouRide />
				<Frequency />
				<OutstateRiding />
				<HaveYouVolunteered />
			</Box>
			</>
		</MorcProvider>
	);
}
