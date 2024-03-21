import { useState, createContext, useContext, useEffect } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

import { lenguageContext } from '../App'


const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {

	const lenguageWrapper = useContext(lenguageContext);
	
	// let aboutMeDataTransalated

	// if(selectedLenguage.lenguage == 'en'){
	// 	aboutMeDataTransalated = aboutMeData[0]
	// }
	// if(selectedLenguage.lenguage == 'pt'){
	// 	aboutMeDataTransalated = aboutMeData[1]
	// }


	
	const [aboutMe, setAboutMe] = useState(aboutMeData[0]);
	
	const clientsHeading = clientsPageHeading;

	useEffect(() => {
		setAboutMe(lenguageWrapper.lenguage == "en" ? aboutMeData[0] : aboutMeData[1])
	})

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
