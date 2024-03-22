import { useState, createContext } from 'react';
import { singleProjectData as baseProjectDataJson } from '../data/projects/singleProjectData.js';

import { PortfolioData as PortfolioDataDataJson } from '../data/projects/3DPortfolioData.js';
import { volunTechData as volunTechDataJson } from '../data/projects/volunTechData.js';
import { youtuberWebsiteData as youtuberWebsiteDataJson } from '../data/projects/youtuberWebsiteData.js';


let singleProjectDataJson = baseProjectDataJson;




let projectListTitle =  [PortfolioDataDataJson, volunTechDataJson, youtuberWebsiteDataJson]

// projectListTitle.forEach(element => {

// 	console.log(element[0].ProjectHeader.title)
// 	console.log('-----')
// })

export function selectProject(selectedProject){
	return () => {
		projectListTitle.forEach(element => {
			
			if(element[0].ProjectHeader.title == selectedProject){
				singleProjectDataJson = element[0] // English Version
			}
			if(element[1].ProjectHeader.title == selectedProject){
				singleProjectDataJson = element[1] // Portuguese Version
			}

		})
	}
}


const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
