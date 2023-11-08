import { Box, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';
import volunteerData from '../data/volunteered.json';

import BarChart from '../BarChart';
import { BarChartData } from '../../types/BarChart.type';

export default function HaveYouVolunteered() {
	const [data, setData] = useState<BarChartData[]>([]);

	useEffect(() => {
		const temp = volunteerData as unknown as BarChartData[];

		setData(temp);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				alignContent: 'center',
				alignItems: 'center',
			}}
		>
			<BarChart
				data={data}
				questionText='Have you volunteered?'
			/>
		</Box>
	);
}
