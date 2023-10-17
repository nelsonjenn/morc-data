import { Box, Button } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
	Legend,
	XAxis,
	YAxis,
	Line,
	ComposedChart,
} from 'recharts';
import { useEffect, useState } from 'react';

import gender from '../data/gender_data.json';
import race from '../data/race_data.json';
import { useTheme } from '@mui/material/styles';

export type RaceData = {
	answer: string;
	value: number;
};

export type GenderData = {
	answer: string;
	value: number;
};

export default function RaceGender() {
	const [display, setDisplay] = useState(false);
	const [dataRace, setDataRace] = useState<RaceData[]>(race);
	const [dataGender, setDataGender] = useState<GenderData[]>(gender);
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	const graphData = dataRace.concat(dataGender);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Button onClick={handleClick}>Who answered the survey?</Button>
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
								height={300}
								data={graphData}
								margin={{
									top: 5,
									right: 30,
									left: 5,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='answer' />
								<YAxis dataKey='value' />
								<Bar
									dataKey='value'
									barSize={40}
									fill={theme.palette.primary.main}
								/>
								<Tooltip />
							</ComposedChart>
						</ResponsiveContainer>
					</Box>
				</>
			)}
		</Box>
	);
}
