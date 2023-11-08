import { Box, Button } from '@mui/material';
import { useState } from 'react';
import VisitBikeShop from './VisitBikeShop';
import AverageBikeShopSpend from './AverageBikeShopSpend';

export default function BikeShop() {
	const [display, setDisplay] = useState(false);

	const handleClick = () => {
		setDisplay(!display);
	};

	return (
		<Box>
			<Button onClick={handleClick}>Bike Shop Information</Button>
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
							<VisitBikeShop />
							<AverageBikeShopSpend />
						</Box>
					</>
				)}
			</Box>
		</Box>
	);
}
