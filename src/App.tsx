import { Box, ThemeProvider } from '@mui/material';
import FavoriteTrail from './components/FavoriteTrail/FavoriteTrail';
import { MorcProvider } from './components/morc-output-manager';
import WhatDoYouRide from './components/WhatDoYouRide/WhatDoYouRide';
import AboutTheTrails from './components/AboutTheTrails/AboutTheTrails';
import RidingBehavior from './components/RidingBehavior/RidingBehavior';
import Frequency from './components/RidingBehavior/Frequency/Frequency';
import Ownership from './components/WhatDoYouRide/Ownership';
import SpendOnFavoriteBike from './components/WhatDoYouRide/SpendOnFavoriteBike';
import { theme } from './theme/theme';
import Riders from './components/SurveyDemographics/Riders';
import Miles from './components/SurveyDemographics/Miles';
import DoYouRideWinter from './components/RidingBehavior/Winter/DoYouRideWinter';
import PurchaseNewBike from './components/BikeShopBehavior/PurchaseNewBike';
import SpendMaintenance from './components/BikeShopBehavior/SpendMaintenance';
import LastBikeStorePurchase from './components/BikeShopBehavior/LastBikeStorePurchase';
import LastServiceAtShop from './components/BikeShopBehavior/LastServiceAtShop';
import RaceGender from './components/SurveyDemographics/RaceGender';
import FavoriteNonMORCTrail from './components/FavoriteTrail/FavoriteNonMORCTrail';
import TravelAdventures from './components/SpendingBehavior/TravelAdventures';
import BikesInfo from './components/WhatDoYouRide/Bikes';

export default function App() {
	const logo = require('./assets/logo.png');
	return (
		<ThemeProvider theme={theme}>
			<MorcProvider>
				<>
					<Box
						sx={{
							backgroundColor: '#071B22',
							height: '75px',
							width: '95vw',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							color: '#FFFFFF',
							paddingLeft: '30px',
						}}
					>
						<img
							src={logo}
							alt='MORC Logo'
							style={{ height: '50px', marginRight: '20px' }}
						/>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignContent: 'center',
							alignItems: 'center',
							width: '90vw',
							height: '90vh',

							padding: '20px',
						}}
					>
						<h1>
							What the Survey Says about Volunteering, Riding the
							Trails
						</h1>
						<FavoriteTrail />
						<AboutTheTrails />

						<h1>About the Riders Who Answered the Survey</h1>
						<RaceGender />
						<Riders />
						<RidingBehavior />
						<Frequency />
						<Miles />
						<DoYouRideWinter />

						<h1>About the Bikes and What We Spend</h1>
						<BikesInfo />

						<SpendMaintenance />
						<LastServiceAtShop />
						<LastBikeStorePurchase />
						<h1>About Travel and Adventures</h1>
						<TravelAdventures />
						<FavoriteNonMORCTrail />
					</Box>
				</>
			</MorcProvider>
		</ThemeProvider>
	);
}
