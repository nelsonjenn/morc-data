import wordCloudData from '../data/non_morc_trails.json';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import {
	Bar,
	BarChart,
	ComposedChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { theme } from '../../theme/theme';

export type WordData = {
	text: string;
	value: number;
};

export default function FavoriteNonMORCTrail() {
	const [data, setData] = useState<WordData[]>([]);
	const [display, setDisplay] = useState(false);
	const [questionText, setQuestionText] = useState('Favorite Non-MORC Trail');
	useEffect(() => {
		const wordCloud = wordCloudData as unknown as WordData[];
		setData(wordCloud);
	}, []);
	const handleClick = () => {
		setDisplay(!display);
	};
	const chartSetting = {
		xAxis: [
			{
				label: 'rainfall (mm)',
			},
		],
		width: 500,
		height: 400,
	};
	const valueFormatter = (value: number) => `${value}mm`;
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Button onClick={handleClick}>{questionText}</Button>
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
						{/* <BarChart
							dataset={data}
							yAxis={[{ scaleType: 'band', dataKey: 'text' }]}
							series={[
								{
									dataKey: 'value',
									label: 'Seoul rainfall',
									valueFormatter,
								},
							]}
							layout='horizontal'
							{...chartSetting}
						/> */}
					</Box>
				</>
			)}
		</Box>
	);
}
