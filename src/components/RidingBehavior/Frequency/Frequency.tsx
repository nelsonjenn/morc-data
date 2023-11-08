import { Box, Button, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
	Legend,
	XAxis,
	YAxis,
	ComposedChart,
} from 'recharts';
import { useState } from 'react';

import allTheData from '../../data/howOftenDoYouRide.json';

export type MilesData = {
	answer: string;
	MetroRides: number;
	OutstateRides: number;
};

export default function Miles() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<MilesData[]>(allTheData);
	const theme = useTheme();

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
			<Button onClick={handleClick}>How often do you ride bikes?</Button>
			{display && (
				<>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
							height: '500px',
						}}
					>
						<ResponsiveContainer
							width='100%'
							height='100%'
						>
							<ComposedChart
								width={500}
								height={400}
								data={data}
								margin={{
									top: 5,
									right: 30,
									left: 5,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='answer' />
								<YAxis />
								<Bar
									dataKey='MetroRides'
									fill={theme.palette.primary.dark}
								/>
								<Bar
									dataKey='OutstateRides'
									fill={theme.palette.primary.main}
								/>

								<Tooltip />
								<Legend />
							</ComposedChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
