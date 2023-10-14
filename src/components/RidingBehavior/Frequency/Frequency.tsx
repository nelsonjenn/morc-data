
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

import frequencyData from '../../data/howOftenDoYouRide.json';


export type FrequencyData = {
    answer: string;
    value: number;
}




export default function Frequency() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<FrequencyData[]>([]);
    
    let graphData: FrequencyData[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
       
    };

  
    
    useEffect(() => {
        graphData = frequencyData as unknown as FrequencyData[];
        setData(graphData);
    },[]);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            
            width: '100%',
            
        }}>
        <Button onClick={handleClick}>How often do we ride?</Button>
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
                <XAxis dataKey="answer" />
                <YAxis />
                <Bar dataKey="value" label="Number of Rides" fill="#2470FC" />
                <Tooltip />
                <Legend />

                </ComposedChart>
               
                
                </ResponsiveContainer>
                {/* <Button onClick={handleTableClick}>Show Table</Button> */}
                </Box>
                </>
            }
            </Box>
            );
        }
        