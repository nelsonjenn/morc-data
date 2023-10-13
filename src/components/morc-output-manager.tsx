import { useState, useContext, createContext } from 'react';
import morcData from './morc_data.json';




export type MorcState = {
	data: any[];
	setData: (any: any[]) => void;

};

export const MorcManager = createContext<MorcState>({
	data: [],
	setData: () => {},

});

export const MorcProvider = ({ children }: { children: JSX.Element }) => {
	const [data, setData] = useState([morcData]);


	return (
		<MorcManager.Provider value={{ data, setData }}>
			{children}
		</MorcManager.Provider>
	);
};

export const useMorcManager = () => {
	return useContext(MorcManager);
};
