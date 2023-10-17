import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';
import spendData from '../data/spendMaintenance.json';
import { useEffect, useState } from 'react';
import { Box, Button, useTheme } from '@mui/material';

export type PurchaseData = {
	answer: string;
	value: number;
};

export type GraphData = {
	id: number;
	value: number;
	label: string;
};

export default function PieActiveArc() {
	const [data, setData] = useState<GraphData[]>([]);
	const [display, setDisplay] = useState(false);
	const theme = useTheme();
	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const graphData = spendData.map((item: PurchaseData, index: number) => {
			return { id: index, value: item.value, label: item.answer };
		});

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
				How much do you spend in an average year on bike maintenance?
			</Button>
			{display && (
				<>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignContent: 'center',
							alignItems: 'center',
							width: '100%',
							height: '300px',
						}}
					>
						<PieChart
							colors={[
								theme.palette.primary.main,
								theme.palette.primary.dark,
								theme.palette.primary.light,
								theme.palette.secondary.main,
							]}
							series={[
								{
									data,
									highlightScope: {
										faded: 'global',
										highlighted: 'item',
									},
									faded: {
										innerRadius: 30,
										additionalRadius: -30,
									},
								},
							]}
							sx={{
								[`& .${pieArcClasses.faded}`]: {
									fill: 'gray',
								},
							}}
							height={200}
						/>
					</Box>
				</>
			)}
		</Box>
	);
}
