import { Box, ThemeProvider } from '@mui/material';
import FavoriteTrail from './components/FavoriteTrail/FavoriteTrail';
import { MorcProvider } from './components/morc-output-manager';
import AboutTheTrails from './components/AboutTheTrails/AboutTheTrails';
import RidingBehavior from './components/RidingBehavior/RidingBehavior';
import Frequency from './components/RidingBehavior/Frequency/Frequency';
import { theme } from './theme/theme';
import Riders from './components/SurveyDemographics/Riders';
import Miles from './components/SurveyDemographics/Miles';
import DoYouRideWinter from './components/RidingBehavior/Winter/DoYouRideWinter';
import SpendMaintenance from './components/BikeShopBehavior/SpendMaintenance';
import LastBikeStorePurchase from './components/BikeShopBehavior/LastBikeStorePurchase';
import LastServiceAtShop from './components/BikeShopBehavior/LastServiceAtShop';
import RaceGender from './components/SurveyDemographics/RaceGender';
import FavoriteNonMORCTrail from './components/FavoriteTrail/FavoriteNonMORCTrail';
import TravelAdventures from './components/SpendingBehavior/TravelAdventures';
import BikesInfo from './components/WhatDoYouRide/Bikes';
import Membership from './components/Membership/Membership';
import GroupRidingSize from './components/RidingBehavior/GroupRidingSize/GroupRidingSize';
import HowFarWillYouTravel from './components/SpendingBehavior/HowFarWillYouTravel';
import FavoriteMORCbyGender from './components/FavoriteTrail/FavoriteMORCbyGender';
import RideMORCByGender from './components/RidingBehavior/RideMORCByGender';
import MORCOverall from './components/MORC/MORCOverall';
import Events from './components/SpendingBehavior/Events';
import Conditions from './components/FavoriteTrail/Conditions';
import PerformOwnMaintenance from './components/BikeShopBehavior/PerformOwnMaintenance';
import Abililty from './components/SurveyDemographics/Ability';
import VisitWebPage from './components/MORC/VisitWebPage';
import TravelToTrail from './components/SpendingBehavior/TravelToTrail';
import BikeShop from './components/BikeShopBehavior/BikeShop';
import FavoriteNonMORCTrailGraph from './components/FavoriteTrail/FavoriteNonMORCTrailGraph';
import MORCDoesWell from './components/MORC/MORCDoesWell';
import MORCImprovements from './components/MORC/MORCImprovements';
import FavoriteBikeShop from './components/BikeShopBehavior/FavoriteBikeShop';

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
						<h1>Membership Survey Results</h1>
						<Membership />
						<h1>
							What the Survey Says about Volunteering, Riding the
							Trails
						</h1>
						<FavoriteTrail />
						<AboutTheTrails />
						<FavoriteMORCbyGender />
						<RideMORCByGender />

						<h1>About the Riders Who Answered the Survey</h1>
						<RaceGender />
						<Abililty />
						<Riders />
						<RidingBehavior />
						<GroupRidingSize />
						<Frequency />
						<Miles />
						<DoYouRideWinter />
						<Events />
						<Conditions />
						<h1>About the Bikes and What We Spend</h1>
						<BikesInfo />
						<PerformOwnMaintenance />
						<SpendMaintenance />
						<BikeShop />
						{/* <AverageSpendBikeShop /> */}
						<FavoriteBikeShop />

						<LastServiceAtShop />
						<LastBikeStorePurchase />
						<h1>About Travel and Adventures</h1>
						<TravelAdventures />
						<HowFarWillYouTravel />
						<TravelToTrail />

						<FavoriteNonMORCTrailGraph />

						<h1>About MORC</h1>
						<VisitWebPage />
						<Conditions />
						<MORCDoesWell />
						<MORCImprovements />
						<MORCOverall />
					</Box>
				</>
			</MorcProvider>
		</ThemeProvider>
	);
}
