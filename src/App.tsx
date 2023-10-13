import { Box } from '@mui/material';
import FavoriteTrail from './components/FavoriteTrail/FavoriteTrail';
import { MorcProvider } from './components/morc-output-manager';
import HaveYouVolunteered from './components/HaveYouVolunteered/HaveYouVolunteered';
import WhatDoYouRide from './components/WhatDoYouRide/WhatDoYouRide';
import AboutTheTrails from './components/AboutTheTrails/AboutTheTrails';
import RidingBehavior from './components/RidingBehavior/RidingBehavior';

export default function App() {
	return (
		<MorcProvider>
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
				<h1>Morc Question Results</h1>
				<RidingBehavior />
				<AboutTheTrails />
				<WhatDoYouRide />
				<FavoriteTrail />
				<HaveYouVolunteered />
			</Box>
		</MorcProvider>
	);
}
