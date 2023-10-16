import { Box, Button, useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';

export type yesNo = {
    label: string;
    value: number;
};

export default function DoYouRideWinter() {
	const [display, setDisplay] = useState(false);
    const [data, setData] = useState<yesNo[]>([]);
    const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		setData([
            { label: 'Yes', value: 88 },
            { label: 'No', value: 132 }
        ]);
	}, []);

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			alignContent: 'center',
			alignItems: 'center'}}>
			<Button onClick={handleClick}>Do you ride in the Snow?</Button>
			
			{display && (
				<Box>
				<Box>
					
					<PieChart
                    colors={[theme.palette.primary.main, theme.palette.secondary.main]}
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
