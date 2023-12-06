import { useState } from 'react';
import nonMorc from '../data/morcImprove.json'
import { Box, Button, Modal, Typography } from '@mui/material';
import { BarChartData } from '../../types/BarChart.type';
import DataModal from '../DataModal';

export default function FavoriteFilteredNonMORCTrail() {
	const [data, setData] = useState<BarChartData[]>(nonMorc);
	const [questionText, setQuestionText] = useState<string>(
		"What can "
	);
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	const handleModal = () => {
		setModalOpen(!modalOpen);
	};
	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 600,
		height: 600,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		FontFace: 'Roboto',
	};

	return (
		<DataModal
			data={data}
			questionText={questionText}
		/>
	);
}
