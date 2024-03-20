import AboutMeBio from '../components/about/AboutMeBio';
import AboutCounter from '../components/about/AboutCounter';
import AboutClients from '../components/about/AboutClients';
import { AboutMeProvider } from '../context/AboutMeContext';
import { motion } from 'framer-motion';

import { lenguageContext } from "../App"
import { useContext } from 'react';
import { setLenguageWrapper } from '../App';

const About = () => {

	const lenguageWrapper = useContext(lenguageContext);
	console.log(lenguageWrapper.lenguage + 'oi')

	return (
		<AboutMeProvider>


			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			> 

			<h1>{lenguageWrapper.lenguage == 'pt' ? 'Portugues' : 'English'}</h1>
			
			<button onClick={() => lenguageWrapper.setLenguage('pt')}>Click To Portuguese 2</button>
			<button onClick={() => lenguageWrapper.setLenguage('en')}>Click To English</button>

			{/* <button onClick={() => setLenguageWrapper(lenguageWrapper.lenguage)}>Click To Portuguese</button> */}

				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;
