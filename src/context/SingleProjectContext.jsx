import { useState, createContext } from 'react';
import { singleProjectData as baseProjectDataJson } from '../data/projects/singleProjectData.js';

import { PortfolioData as PortfolioDataDataJson } from '../data/projects/3DPortfolioData.js';
import { volunTechData as volunTechDataJson } from '../data/projects/volunTechData.js';
import { youtuberWebsiteData as youtuberWebsiteDataJson } from '../data/projects/youtuberWebsiteData.js';


let singleProjectDataJson = baseProjectDataJson;


let projectListTitle =  [PortfolioDataDataJson, volunTechDataJson, youtuberWebsiteDataJson]

export function selectProject(selectedProject){
	return () => {
		projectListTitle.forEach(element => {

			if(element.ProjectHeader.title == selectedProject){
				console.log(element)
				singleProjectDataJson = element
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
