import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { useContext } from 'react';
import { lenguageContext } from '../../App';

const contacts = [
	{
		id: 1,
		name: 'Caruaru, Pernambuco, Brazil',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'herbert.richard@ultimate42.dev',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+55 (81) 9 96018238',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	
	const lenguageWrapper = useContext(lenguageContext);
	
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					{ lenguageWrapper.lenguage == 'en' ? 'Conctact Details' : 'Detalhes de contato' }
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
