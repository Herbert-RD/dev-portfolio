import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import {Component, ModalComponent} from './ProjectGallery.js'

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	function openImg(img){
		return () => {
			console.log(img)
		}
	}

	return (

		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			
				{singleProjectData.ProjectImages.map((project) => {
					return (
						<Component onClick={openImg(2)}>
							<div className="mb-10 sm:mb-0" key={project.id}>
								<img
									src={project.img}
									className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
									alt={project.title}
									key={project.id}
								/>
							</div>

							
						</Component>

						
					);
				})}
			
			<ModalComponent >
				
			</ModalComponent>
		</div>
	);
};

export default ProjectGallery;
