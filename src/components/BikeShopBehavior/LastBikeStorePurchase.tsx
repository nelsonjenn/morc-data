import { Box, Button, useTheme } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
	Bar,
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

export default function LastBikeStorePurchase() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<PurchaseData[]>([]);
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const graphData = purchaseData as unknown as PurchaseData[];
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
				When did you last make a purchase at a local bike shop?
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
