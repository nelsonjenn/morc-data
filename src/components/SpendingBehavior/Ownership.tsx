
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

import bikesOwnedData from '../data/numberOfBikes.json'


export type BikesOwned = {
    answer: string;
    value: number;
}


export default function Ownership() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<BikesOwned[]>([]);
    
    let graphData: BikesOwned[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
       
    };

  
    
    useEffect(() => {
        graphData = bikesOwnedData as unknown as BikesOwned[];
        console.log(graphData);
        setData(graphData);
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
        