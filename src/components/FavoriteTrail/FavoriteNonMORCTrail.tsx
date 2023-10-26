import WordCloud from 'react-d3-cloud';
import { Box, Button, Card } from '@mui/material';
import data from '../data/non_morc_trails.json';
import { useEffect, useState } from 'react';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
export type WordCloudData = {
	text: string;
	value: number;
};

export default function FavoriteNonMORCTrail() {
	const [graphData, setGraphData] = useState<WordCloudData[]>([]);
	const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);
	const [display, setDisplay] = useState(false);

	const handleClick = () => {
		setDisplay(!display);
	};

	useEffect(() => {
		setGraphData(data);
	}, []);
	return (
		<>
			<Button onClick={handleClick}>Favorite Non MORC Trail</Button>
			{display && (
				<Box sx={{ width: '800px', height: '500px' }}>
					<Card>
						<WordCloud
							data={graphData}
							width={500}
							height={500}
							font='Monaco'
							fontStyle='italic'
							fontWeight='bold'
							fontSize={(word) => Math.log2(word.value) * 5}
							spiral='rectangular'
							rotate={(word) => word.value % 360}
							padding={5}
							random={Math.random}
							onWordClick={(event, d) => {
								console.log(`onWordClick: ${d.text}`);
							}}
							onWordMouseOver={(event, d) => {
								console.log(`onWordMouseOver: ${d.text}`);
							}}
							onWordMouseOut={(event, d) => {
								console.log(`onWordMouseOut: ${d.text}`);
							}}
						/>
					</Card>
				</Box>
			)}
		</>
	);
}
