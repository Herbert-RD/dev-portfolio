import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

export const lenguageContext = createContext('en')

export function setLenguageWrapper(initialLenguage){
	let newLenguage = initialLenguage == 'en' ? 'pt' : 'en';
	console.log(newLenguage)
	localStorage.setItem('lenguage', newLenguage)
	window.location.reload()
}

export function checkLenguage(en, pt){
	let selectedLenguage = localStorage.getItem('lenguage');

	if(selectedLenguage == 'en'){
		return en
	}
	if(selectedLenguage == 'pt'){
		return pt
	}
}

function App() {

	//sets the default lenguage, if it doesn't exists
	if(!localStorage.getItem('lenguage')){
		localStorage.setItem('lenguage', 'en')
	}

	const initialLenguage = localStorage.getItem('lenguage') 
	const [lenguage, setLenguage] = useState(initialLenguage)


	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<lenguageContext.Provider value={{lenguage: lenguage, setLenguage: setLenguage}}>
							<Routes>
								<Route path="/pt" element={<Home lenguage="pt"/>} />
								<Route path="/" element={<Home />} />
								<Route path="projects" element={<Projects />} />
								<Route
									path="projects/single-project"
									element={<ProjectSingle />}
								/>

								<Route path="about" element={<About />} />
								<Route path="contact" element={<Contact />} />
							</Routes>
						</lenguageContext.Provider>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
