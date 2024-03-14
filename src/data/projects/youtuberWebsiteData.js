// Import images
import Image1 from '../../images/youtuber-portfolio/image-1.png';
import Image2 from '../../images/youtuber-portfolio/image-2.png';
import Image3 from '../../images/youtuber-portfolio/image-3.png';
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

export const youtuberWebsiteData = {
	ProjectHeader: {
		title: 'Youtuber Personal Website',
		publishDate: 'Jul 26, 2023',
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
				details: 'Eystreem',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://www.youtube.com/@eystreem',
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
					'React',
					'Bootstrap'
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					"Project goal The Content-Creator Eystreem was a sensation across all major social media platforms, yet there was one missing piece to his digital presence – a personal website to truly showcase his personality and purpose. 🌟✨ But fear not, for that was about to change! Stay tuned for the unveiling of his virtual home, where his essence will shine brighter than ever before! 💻🚀 ",
			},
			{
				id: 2,
				details:
					"The vision for the website was to create a digital haven where Eystreem could seamlessly integrate all his social networks while providing deeper insights into his persona, all while encapsulating his signature style and colors! 🎨✨ The blueprint for this virtual masterpiece took shape through meticulous design and prototyping in Figma.",
			},
			{
				id: 3,
				details:
					"With the design in hand, it was time to breathe life into pixels! Armed with nothing but pure HTML, CSS, and Javascript, the website came to fruition. Hosted graciously on Netlify, this project is not only visually stunning but also meticulously responsive, ensuring a delightful experience across all devices. 🌟💻",
			},
			{
				id: 4,
				details:
					'',
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
