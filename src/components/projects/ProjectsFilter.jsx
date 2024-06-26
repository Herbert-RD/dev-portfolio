import { useContext } from 'react';
import { lenguageContext } from '../../App';
const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
	'Branding',
];


const ProjectsFilter = ({ setSelectProject }) => {
	const lenguageWrapper = useContext(lenguageContext);	
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
								shrink
                py-2
                border
								sm:w-64
                dark:border-secondary-dark
                rounded-lg
                text-sm
                dark:font-medium
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
								
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md shrink">
				{lenguageWrapper.lenguage == 'en' ? 'All projects' : 'Todos os projetos'}
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md shrink" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
