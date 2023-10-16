
import { Box, Button,  Toolbar,  useTheme } from '@mui/material';
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
import {theme } from '../../../theme/theme';

import riding from '../../data/winterPercentage.json'
import { count } from 'console';


export type WinterRiding = {
    answer: string;
    value: number;
}


export default function HowOftenRideWinter() {
    
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<WinterRiding[]>([]);
    const theme = useTheme();
    
    let graphData: WinterRiding[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
       
    };

  
    
    useEffect(() => {
        graphData = riding as unknown as WinterRiding[];
        setData(graphData);
    },[]);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            
        }}>
        <Button onClick={handleClick}>What percentage of your cycling is winter/snow riding?</Button>
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
                <Bar dataKey="count" fill={theme.palette.primary.main} />
                <Tooltip />
                

                </ComposedChart>
               
                
                </ResponsiveContainer>
              
                </Box>
                </>
            }
            </Box>
            );
        }
        