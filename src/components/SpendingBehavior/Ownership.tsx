
import { Box, Button} from '@mui/material';
import {
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
    Bar,

    XAxis,
    YAxis,

    ComposedChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,

} from 'recharts';
import { useEffect, useState } from 'react';

import bikesOwnedData from '../data/numberOfBikes.json'


export type BikesOwned = {
    answer: string;
    value: number;
}
export type GraphData = {
    answer: string;
    value: number;
    fullMark: number;
}


export default function Ownership() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<BikesOwned[]>([]);
    
    let graphData: GraphData[] = [];
    const fillGraph = (data: BikesOwned[]) => {
        graphData = data.map((row) => {
            return {answer: row.answer, value: row.value, fullMark: 200};
        });
        return graphData;
    }
    
    const handleClick = () => {
        setDisplay(!display);
       
    };

  
    
    useEffect(() => {
        const importData = bikesOwnedData as BikesOwned[];
        setData(importData);
        const graphData = fillGraph(importData);
    },[]);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            
        }}>
        <Button onClick={handleClick}>How many bikes do you own?</Button>
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
               
                {/* <CartesianGrid strokeDasharray="3 3" />
                
                <YAxis dataKey="answer" type="category" scale="band"/>
                <XAxis type="number"/>
                <Bar dataKey="value" fill="#2470FC" />
                <Tooltip /> */}
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
        