import { useContext, useState } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import {Component, ModalComponent} from './ProjectGallery.js'

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	const [modalVisible, toggleModal] = useState(false);
	let modalComponent

	function buildModal(img){
		return (
			<ModalComponent id="galleryModal" onClick={() => toggleModal(!modalVisible)}>
				<img src={img} alt="" />
				<button onClick={() => toggleModal(!modalVisible)}>Close modal</button>
			</ModalComponent>)
	}
	
	return (

		<>
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				
					{singleProjectData.ProjectImages.map((project) => {
						return (
							<>
							<Component onClick={() => {toggleModal(buildModal(project.img))}}>
								<div className="mb-10 sm:mb-0" key={project.id}>
									<img
										src={project.img}
										className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
										alt={project.title}
										key={project.id}
										/>
								</div>
							</Component>

							</>
						);
					})}
			</div>

			<div id='modal-wrapper'>
				{modalVisible ? modalVisible : ""}
			</div>
			
		</>


	);
};

export default ProjectGallery;
