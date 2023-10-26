import { Box, Button } from '@mui/material';
import { useState } from 'react';
import Ownership from './Ownership';
import SpendOnFavoriteBike from './SpendOnFavoriteBike';
import WhatDoYouRide from './WhatDoYouRide';
import PurchaseNewBike from '../BikeShopBehavior/PurchaseNewBike';

export default function BikesInfo() {
	const [display, setDisplay] = useState(false);

	const handleClick = () => {
		setDisplay(!display);
	};

	return (
		<Box>
			<Button onClick={handleClick}>About our Bikes</Button>
			<Box>
				{display && (
					<>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignContent: 'space-between',
							}}
						>
							<WhatDoYouRide />
							<Ownership />
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignContent: 'space-between',
							}}
						>
							<SpendOnFavoriteBike />
							<PurchaseNewBike />
						</Box>
					</>
				)}
			</Box>
		</Box>
	);
}
