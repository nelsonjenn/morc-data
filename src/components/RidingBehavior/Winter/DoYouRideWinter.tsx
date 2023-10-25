import { Box, Button, Card, Typography, useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';
import snowYesNoData from '../../data/winterYesNo.json';
import riding from '../../data/winterPercentage.json';
import BarChartOpen from '../../BarChartOpen';
import { BarChartData } from '../../../types/BarChart.type';

export type yesNo = {
	label: string;
	value: number;
};

export default function DoYouRideWinter() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<yesNo[]>([]);
	const [graphData, setGraphData] = useState<BarChartData[]>([]);
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const temp = snowYesNoData.map((item, id) => {
			return {
				label: item.answer,
				value: item.count,
				id: id,
			};
		});
		setData(temp);
		const graphData = riding as unknown as BarChartData[];
		setGraphData(graphData);
	}, []);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				alignContent: 'top',
				alignItems: 'center',
			}}
		>
			<Button onClick={handleClick}>Riding in the Snow!</Button>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					alignContent: 'center',
					alignItems: 'center',
				}}
			>
				{display && (
					<>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
								alignContent: 'flex-start',
								alignItems: '-moz-initial',
							}}
						>
							<Card
								sx={{
									width: '33%',
									paddingRight: '20px',
									paddingLeft: '50px',
								}}
							>
								<Button>Do you ride in the Snow?</Button>
								<PieChart
									colors={[
										theme.palette.primary.main,
										theme.palette.secondary.main,
									]}
									dataset={data}
									series={[
										{
											data: data,
											arcLabel: 'label',
										},
									]}
									width={400}
									height={200}
								/>
							</Card>
							<Card sx={{ width: '50%' }}>
								<BarChartOpen
									questionText='What percentage of your cycling is winter/snow riding?'
									data={graphData}
								/>
							</Card>
						</Box>
					</>
				)}
			</Box>
		</Box>
	);
}
