
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {
    ResponsiveContainer,
    Tooltip,
    
    BarChart,
    CartesianGrid,
    Bar,
    Legend,
    XAxis,
    YAxis,
    Line,
    ComposedChart,

} from 'recharts';
import { useEffect, useState } from 'react';

import allTheData from './AllData.json';


export type ParkValueData = {
    park: string;
    value: number;
}


export type TrailData = {
    park: string;
    volunteer: number;
    favorite: number;
    ride: number;
};
const CustomizedAxisTick = (...args: { x: any; y: any; stroke: any; payload: any; }[])=>{
    const {  x, y, stroke, payload } = args[0];
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  };


export default function AboutTheTrails() {
    const [displayTableData, setDisplayTableData] = useState(false);
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState<TrailData[]>([]);
    
    let graphData: TrailData[] = [];

    
    const handleClick = () => {
        setDisplay(!display);
        setDisplayTableData(false);
    };

    const handleTableClick = () => {
        setDisplayTableData(!displayTableData);
        setDisplay(!display);
    }
    
    useEffect(() => {
        graphData = allTheData as unknown as TrailData[];
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
        <Button onClick={handleClick}>About the trails?</Button>
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
                <XAxis dataKey="park" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                
              
                <Bar dataKey="volunteer" stackId="a" fill="#0096FF" />
                             
                <Bar dataKey="ride" stackId="a" fill="#82ca9d" />
                <Line type="monotone"  dataKey="favorite" stroke="#301934" />
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
        