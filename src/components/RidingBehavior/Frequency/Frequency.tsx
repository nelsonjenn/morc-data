
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

import frequencyData from '../../data/howOftenDoYouRide.json';
import outstateRiding from '../../data/outstateRiding.json'


export type FrequencyData = {
    answer: string;
    value: number;
    outstateValue: number;
}


export default function Frequency() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<FrequencyData[]>([]);
    const theme = useTheme();
    
    let graphData: FrequencyData[] = [];
    let outstateGraphData: FrequencyData[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
       
    };

    useEffect(() => {
        graphData = frequencyData as unknown as FrequencyData[];
        outstateGraphData = outstateRiding as unknown as FrequencyData[];
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
                <Bar dataKey="MetroRides" label="Number of Rides" fill={theme.palette.primary.main} />
                <Bar dataKey="OutstateRides" fill={theme.palette.secondary.main}/>
                
                <Tooltip />
                <Legend />

                </ComposedChart>
               
                
                </ResponsiveContainer>
               
                </Box>
                </>
            }
            </Box>
            );
        }
        