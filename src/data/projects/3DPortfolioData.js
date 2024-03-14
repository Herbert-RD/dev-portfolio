// Import images
import Image1 from '../../images/3d-portfolio/image-1.png';
import Image2 from '../../images/3d-portfolio/image-2.png';
import Image3 from '../../images/3d-portfolio/image-3.png';
import Image4 from '../../images/mobile-project-1.jpg';
import Image5 from '../../images/web-project-1.jpg';
import Image6 from '../../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const PortfolioData = {
	ProjectHeader: {
		title: '3D Art Portfolio Website',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Herbert Richard',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://company.com',
			}
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'ReactJS',
					'Styled Components',
					'Figma',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"As a developer with a deep passion for marking Low-Poly 3D art. A portfolio transcends mere virtual showcasing, It's the stage where my skills, style, and creativity come alive, captivating potential clients, employers, and collaborators. 🎨✨",
			},
			{
				id: 2,
				details:
					"With this inspiration in mind, I've decided to create a website that not only showcases my artworks but also captures the essence of my style and shares my journey in the artistic realm. 🌟",
			},
			{
				id: 3,
				details:
					"The initial concept revolved around crafting a website that embodied ease of editing, beauty, modernity, and simplicity. With this vision in mind, I turned to Figma to create both the prototype and the UI/UX designs. Every element, from the layout to the fonts and colors, was meticulously chosen to exude a sense of modernity and style. ✨",
			},
			{
				id: 4,
				details:
					"For the development phase, I opted to leverage the power of HTML, CSS, and Javascript exclusively, eschewing the need for a framework. This decision allowed for a more tailored approach, ensuring the final product aligned seamlessly with the original vision. 🚀",
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com/realstoman',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/realstoman',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com/c/StomanStudio',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
