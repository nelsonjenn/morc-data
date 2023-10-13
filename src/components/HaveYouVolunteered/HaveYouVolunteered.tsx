import { Box, Button } from '@mui/material';
import { PieChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';

export default function HaveYouVolunteered() {
	const [display, setDisplay] = useState(false);
	let data: any[] = [];

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		data = [
			{ label: 'Yes', value: 88 },
			{ label: 'No', value: 132 }
		];
	}, []);

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			alignContent: 'center',
			alignItems: 'center'}}>
			<Button onClick={handleClick}>Have You Volunteered</Button>
			
			{display && (
				<Box>
				<h1>Have You Volunteered</h1>
				<Box>
					
					<PieChart
						dataset={data}
						series={[
							{
								data: [
									{ id: 0, value: 88, label: 'Yes' },
									{ id: 1, value: 132, label: 'No' }
								]
							}
						]}
						width={400}
						height={200}
					/>
				</Box>
				</Box>
			)}
		</Box>
	);
}
