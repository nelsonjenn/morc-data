
import { Box, Button, useTheme } from '@mui/material';
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

import allTheData from '../data/ridingMiles.json';


export type MilesData = {
    answer: string;
    dirt: number;
    total: number;
}




export default function Miles() {
    const [displayTableData, setDisplayTableData] = useState(false);
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<MilesData[]>([]);
    const theme = useTheme();
    
    let graphData: MilesData[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
        setDisplayTableData(false);
    };

  
    
    useEffect(() => {
        graphData = allTheData as unknown as MilesData[];
        setData(graphData);
    },[]);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}>
        <Button onClick={handleClick}>How many miles do you cycle each year?</Button>
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
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="answer" />
                <YAxis />
                <Bar dataKey="dirt" fill={theme.palette.primary.dark} />
                <Bar dataKey="total" fill={theme.palette.primary.main} />
                
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
        