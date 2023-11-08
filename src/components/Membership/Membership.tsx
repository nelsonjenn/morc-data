import { Box, Button, Card, Typography, useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts';
import { useEffect, useState } from 'react';

import membership from '../data/everBeenMORCMember.json';
import currentMember from '../data/currentlyMORCMember.json';
import lengthOfMembership from '../data/lengthOfMembership.json';
import age from '../data/age.json';
import why from '../data/why.json';

import BarChartOpen from '../BarChartOpen';
import { BarChartData } from '../../types/BarChart.type';

export type yesNo = {
	label: string;
	value: number;
	id: number;
};

export default function Membership() {
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<yesNo[]>([]);
	const [whyData, setWhyData] = useState<BarChartData[]>(why);
	const [ageData, setAgeData] = useState<BarChartData[]>(age);
	const [currentMemberData, setCurrentMemberData] = useState<yesNo[]>([]);
	const [graphData, setGraphData] =
		useState<BarChartData[]>(lengthOfMembership);
	const theme = useTheme();

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const temp = membership.map((item, id) => {
			return {
				label: item.answer,
				value: item.value,
				id: id,
			};
		});
		setData(temp);

		const current = currentMember.map((item, id) => {
			return {
				label: item.answer,
				value: item.value,
				id: id,
			};
		});
		console.log(current);
		setCurrentMemberData(current);
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
			<Button onClick={handleClick}>Membership Answers!</Button>
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
								flexDirection: 'column',
								width: '100%',
								alignContent: 'center',
								alignItems: '-moz-initial',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									width: '100%',

									alignContent: 'flex-start',
									alignItems: '-moz-initial',
								}}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										width: '50%',
									}}
								>
									<Card
										sx={{
											paddingRight: '20px',
											paddingLeft: '50px',
											paddingBottom: '20px',
										}}
									>
										<Button>
											Have you ever been a MORC member?
										</Button>
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
									<Card
										sx={{
											paddingRight: '20px',
											paddingLeft: '50px',
										}}
									>
										<Button>
											Are you currently a MORC member?
										</Button>
										<PieChart
											colors={[
												theme.palette.primary.main,
												theme.palette.secondary.main,
											]}
											dataset={currentMemberData}
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
								</Box>

								<Card sx={{ width: '50%' }}>
									<BarChartOpen
										questionText='If yes, how long have you continuously been MORC member?'
										data={graphData}
									/>
								</Card>
							</Box>

							<Box
								sx={{
									width: '100%',
									alignContent: 'center',
									alignItems: 'center',
								}}
							>
								<Card>
									<BarChartOpen
										questionText='Age Demographics'
										data={ageData}
									/>
								</Card>
								<Card>
									<BarChartOpen
										questionText='Why do you choose to support MORC?'
										data={whyData}
									/>
								</Card>
							</Box>
						</Box>
					</>
				)}
			</Box>
		</Box>
	);
}
