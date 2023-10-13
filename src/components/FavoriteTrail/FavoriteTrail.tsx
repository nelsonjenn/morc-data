import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {
	ResponsiveContainer,
	Tooltip,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar
} from 'recharts';
import { useEffect, useState } from 'react';
import exportData from './FavoriteTrail.json';


export type FavoriteTrail = {
	park: string;
	value: number;
};


export default function FavoriteTrail() {
	
	const [display, setDisplay] = useState(false);
	const [data, setData] = useState<FavoriteTrail[]>([]);
	

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		const importData = exportData as FavoriteTrail[];
		
		setData(importData);
	},[]);

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			padding: '20px',
			width: '100%',
			
		}}>
		<Button onClick={handleClick}>What is our Favorite Trail?</Button>
		   {display && 
		   <>
		  
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: '20px',
						width: '100%',
						height: '500px'
					}}>
					<ResponsiveContainer
						width='100%'
						height='100%'>
						<RadarChart
							cx='50%'
							cy='50%'
							outerRadius='80%'
							data={data}>
							<PolarGrid />
						   <Tooltip />
							<PolarAngleAxis dataKey='park' />
							<PolarRadiusAxis angle={30} domain={[0, 25]} />
							<Radar
								name='value'
								dataKey='value'
								stroke='black'
								fill='#8884d8'
								fillOpacity={0.6}
							/>
							
						</RadarChart>
					</ResponsiveContainer>
				</Box>
				</>
				}
		</Box>
	);
}
