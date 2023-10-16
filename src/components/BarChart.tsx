
import { Box, Button} from '@mui/material';
import {
    ResponsiveContainer,
    Tooltip,
    CartesianGrid,
    Bar,
    XAxis,
    YAxis,
    ComposedChart,
} from 'recharts';
import { useEffect, useState } from 'react';

export type BarChartData = {
    answer: string;
    value: number;
}


export default function BarChart() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<BarChartData[]>([]);
    const [questionText, setQuestionText] = useState<string>('');
    
    let graphData: BarChartData[] = [];

    const handleClick = () => {
        setDisplay(!display);
       
    };




    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            
        }}>
        <Button onClick={handleClick}>{questionText}</Button>
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
        
