// Import images
import Image1 from '../../images/ngo-website/image-1.png';
import Image2 from '../../images/ngo-website/image-2.png';
import Image3 from '../../images/ngo-website/image-3.png';
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

export const volunTechData = {
	ProjectHeader: {
		title: 'VolunTech - A voluntary aid website for NGOs',
		publishDate: 'Dez 20, 2023',
		tags: 'UI / Frontend / Backend',
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
				details: 'VolunTech',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend/Backend Development',
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
					'NodeJS',
					'ReactJS'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'This project was developed by me and 2 other companions, where I was the technological responsible.',
			},
			{
				id: 2,
				details:
					'The main goal is to facilitate a symbiotic relationship where NGOs harness cutting-edge tech solutions to amplify their impact, while budding volunteers immerse themselves in real-world projects, gaining invaluable experience along the way.',
			},
			{
				id: 3,
				details:
					"As our project evolved, so did our vision. Today, we extend our reach beyond tech aficionados to welcome designers and video editors into our fold. Together, we're on a mission to empower NGOs worldwide, enriching lives and effecting positive change one project at a time.",
			},
			{
				id: 4,
				details:
					"VolunTech 🌟 was crafted from the ground up, with its UI/UX and prototype meticulously designed on FIGMA. The visual aesthetic prioritizes comfort and security, ensuring a seamless experience for both NGO managers and volunteers as they navigate the platform.🖥️",
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
