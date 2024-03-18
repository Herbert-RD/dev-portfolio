import { useState, createContext, useContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

import { lenguageContext } from '../App'


const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const lenguage = 'pt'
	
	let aboutMeDataTransalated
	if(lenguage == 'en'){
		aboutMeDataTransalated = aboutMeData[0]
	}
	if(lenguage == 'pt'){
		aboutMeDataTransalated = aboutMeData[1]
	}


	console.log(aboutMeDataTransalated)
	
	const [aboutMe, setAboutMe] = useState(aboutMeDataTransalated);
	const clientsHeading = clientsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				clientsHeading,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
