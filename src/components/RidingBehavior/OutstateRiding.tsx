
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
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

import outstateRiding from '../data/outstateRiding.json'


export type OutstateRiding = {
    answer: string;
    value: number;
}


export default function Frequency() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<OutstateRiding[]>([]);
    
    let graphData: OutstateRiding[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
       
    };

  
    
    useEffect(() => {
        graphData = outstateRiding as unknown as OutstateRiding[];
        console.log(graphData);
        setData(graphData);
    },[]);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            
        }}>
        <Button onClick={handleClick}>How often do you ride outside of the Twin Cities Region?</Button>
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
                <ComposedChart
                layout='vertical'
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
                <CartesianGrid strokeDasharray="3 3" />
                
                <YAxis dataKey="answer" type="category" scale="band"/>
                <XAxis type="number"/>
                <Bar dataKey="value" fill="#2470FC" />
                <Tooltip />
                

                </ComposedChart>
               
                
                </ResponsiveContainer>
              
                </Box>
                </>
            }
            </Box>
            );
        }
        