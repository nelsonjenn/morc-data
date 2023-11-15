import { useState } from 'react';
import { BarChartData } from '../types/BarChart.type';
import {
	Box,
	Button,
	Checkbox,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Modal,
	Typography,
	useTheme,
} from '@mui/material';
import { QuestionAnswer, Star, StarBorder } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';

type modalProps = {
	data: BarChartData[];
	questionText: string;
};

export default function FavoriteFilteredNonMORCTrail({
	data,
	questionText,
}: modalProps) {
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const theme = useTheme();
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
		overflow: 'scroll',
	};
	const [checked, setChecked] = useState([0]);
	const handleToggle = (value: any) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<>
			<Button onClick={handleModal}>{questionText}</Button>
			<Modal
				open={modalOpen}
				onClose={handleModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
					>
						{questionText}
					</Typography>

					{/* <List
						sx={{
							width: '100%',
							maxWidth: 360,
							bgcolor: 'background.paper',
						}}
					>
						{data.map((d) => (
							<ListItem
								key={d.answer}
								sx={{ width: '100%' }}
							>
								<ListItemIcon>
									<ListItemIcon
										onClick={handleToggle(d.answer)}
									>
										<StarBorder />
									</ListItemIcon>
								</ListItemIcon>
								<ListItemText>{d.answer}</ListItemText>
								<ListItemText>{d.value}</ListItemText>
							</ListItem>
						))}
					</List> */}
					<List
						sx={{
							width: '100%',
							maxWidth: 360,
							bgcolor: 'background.paper',
						}}
					>
						{data.map((answer, value, id) => {
							const labelId = `checkbox-list-label-${value}`;

							return (
								<ListItem
									key={value}
									disablePadding
								>
									<ListItemButton
										role={undefined}
										onClick={handleToggle(value)}
										dense
									>
										<ListItemIcon>
											<Checkbox
												edge='start'
												checked={
													checked.indexOf(value) !==
													-1
												}
												tabIndex={-1}
												disableRipple
												inputProps={{
													'aria-labelledby': labelId,
												}}
											/>
										</ListItemIcon>
										<ListItemText
											id={answer.answer}
											primary={
												answer.answer +
												' ' +
												answer.value +
												' votes'
											}
										/>
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Box>
			</Modal>
		</>
	);
}
