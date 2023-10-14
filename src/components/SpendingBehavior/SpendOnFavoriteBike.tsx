
import { Box, Button} from '@mui/material';
import {
    ResponsiveContainer,
    Tooltip,

    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
 

} from 'recharts';
import { useEffect, useState } from 'react';

import spendData from '../data/spendOnBikes.json'


export type BikeSpendData = {
    answer: string;
    value: number;
}


export default function SpendOnFavoriteBike() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<BikeSpendData[]>([]);
    
    let graphData: BikeSpendData[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
       
    };

  
    
    useEffect(() => {
        graphData = spendData as unknown as BikeSpendData[];
      
        setData(graphData);
    },[]);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            
        }}>
        <Button onClick={handleClick}>How much did you spend on the bike you ride most often?</Button>
        {display && 
            <>
          
                
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
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
						<PolarAngleAxis dataKey='answer' />
						<Radar
							name='value'
							dataKey='value'
							stroke='black'
							fill='#2470FC'
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
        