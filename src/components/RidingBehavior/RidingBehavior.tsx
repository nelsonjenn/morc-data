
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

import allTheData from './OffRoadRiding.json';


export type ParkValueData = {
    park: string;
    value: number;
}


export type RiderData = {
    text: string;
    answers: string;
    Female: number;
    Male: number;
    Nonbinary: number;
    Other: number;
    PreferNotToSay: number;    
};



export default function RidingBehavior() {
    const [displayTableData, setDisplayTableData] = useState(false);
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<RiderData[]>([]);
    
    let graphData: RiderData[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
        setDisplayTableData(false);
    };

    const handleTableClick = () => {
        setDisplayTableData(!displayTableData);
        setDisplay(!display);
    }
    
    useEffect(() => {
        graphData = allTheData as unknown as RiderData[];
        console.log(graphData);
        setData(graphData);
    },[]);
    
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            width: '100%',
            
        }}>
        <Button onClick={handleClick}>Who Answered The Survey?</Button>
        {display && 
            <>
          
                
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '500px'
                }}>
                    <h3>Bogus Incomplete Data</h3>
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
                <XAxis dataKey="text" />
                <YAxis />
                <Bar dataKey="Female" stackId="a" fill="#5A5A5A" />
                <Bar dataKey="Male" stackId="a" fill="#0096FF" />
                <Line type="monotone" dataKey="Female" stroke="#FF69B4" />
                <Tooltip />
                <Legend />

              
               
              
                
                </ComposedChart>
               
                
                </ResponsiveContainer>
                {/* <Button onClick={handleTableClick}>Show Table</Button> */}
                </Box>
                </>
            }
            {/* {displayTableData && (  <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
            <TableCell>Park</TableCell>
            <TableCell>Volunteers</TableCell>
            <TableCell>Favorite</TableCell>
            <TableCell>Ride</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
                <TableRow>
                <TableCell>{row.park}</TableCell>
                <TableCell>{row.volunteer}</TableCell>
                <TableCell>{row.favorite}</TableCell>
                <TableCell>{row.ride}</TableCell>
                </TableRow>
                ))}
                </TableBody>
                </Table>
                
                
                </TableContainer>)} */}
            </Box>
            );
        }
        