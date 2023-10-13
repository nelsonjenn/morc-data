import {
	Typography,
	Box,
	TableContainer,
	Paper,
	Table,
	TableCell,
	TableRow
} from '@mui/material';
import { useMorcManager } from './morc-output-manager';
import React from 'react';

export default function QuestionList() {
	const { data } = useMorcManager();

	return (
		<Box>
			<Typography>Question List</Typography>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 650 }}
					aria-label='simple table'>
					<TableRow>
						<TableCell>Where do you volunteer?</TableCell>
					</TableRow>
					{data.map((row) => (
						<TableRow key={row.email}>
							<TableCell
								component='th'
								scope='row'>
								{row.Which_MORC_trails_have_you_ridden}
							</TableCell>
							<TableCell align='right'>{row.year}</TableCell>
							<TableCell align='right'>{row.lifeExpectancy}</TableCell>
						</TableRow>
					))}
				</Table>
			</TableContainer>
		</Box>
	);
}
