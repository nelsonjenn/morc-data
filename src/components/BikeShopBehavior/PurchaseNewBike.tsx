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
import { useEffect, useState } from 'react';
import purchaseData from '../data/newBike.json';

export type PurchaseData = {
	answer: string;
	value: number;
};

export default function PurchaseNewBike() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<PurchaseData[]>([]);
	const theme = useTheme();

	let graphData: PurchaseData[] = [];
	let outstateGraphData: PurchaseData[] = [];

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		graphData = purchaseData as unknown as PurchaseData[];
		setData(graphData);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',

				width: '100%',
			}}
		>
			<Button onClick={handleClick}>
				When did you last get a new bike?
			</Button>
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
								data={data}
								margin={{
									top: 5,
									right: 30,
									left: 5,
									bottom: 15,
								}}
							>
								<CartesianGrid strokeDasharray='3 3' />
								<XAxis dataKey='answer' />
								<YAxis />
								<Bar
									dataKey='value'
									label='Last New Bike'
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
