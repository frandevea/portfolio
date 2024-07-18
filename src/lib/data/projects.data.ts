import type { Project } from '$lib/types/project.interface';
import koru from '$lib/images/projects/koru.png';
import viajes from '$lib/images/projects/viajes.png';
import portfolio from '$lib/images/projects/portfolio.png';
import ilitia from '$lib/images/projects/ilitia.png';
import vinci from '$lib/images/projects/vinci.png';
import delcom from '$lib/images/projects/delcom.png';
import adntro from '$lib/images/projects/adntro.png';
import arbomap from '$lib/images/projects/arbomap.png';
import repsol from '$lib/images/projects/repsol.png';
import merak from '$lib/images/projects/merak.png';

export const projects: Project[] = [
	{
		name: 'Arbomap from Tecnigral',
		image: arbomap,
		description:
			'Leading GIS software for the efficient management of green spaces, trees, playgrounds, and street furniture.',
		link: 'https://www.tecnigral.es/arbomap/',
		linkName: 'tecnigral.es'
	},

	{
		name: 'Repsol Data Trading',
		image: repsol,
		description:
			"Repsol's data trading software equips the company with the insights necessary to make informed decisions, optimize profits, and reduce risk in the oil and gas market.",
		link: 'https://www.repsol.com/es/index.cshtml',
		linkName: 'repsol.com'
	},

	{
		name: 'ADNTRO Genetics',
		image: adntro,
		description:
			'A company that offers DNA testing kits that allow you to learn more about your ancestry, genetic predispositions, and other health-related factors',
		link: 'https://demo.adntro.com/dashboard',
		linkName: 'adntro.com'
	},

	{
		name: 'Knorr Bremse’s Conference Website',
		image: merak,
		description:
			'Knorr-Bremse’s innovative web application showcases the advanced ventilation systems in the world’s most renowned metro systems.',
		link: 'https://www.knorr-bremse.es/es/',
		linkName: 'knorr-bremse.es'
	},

	{
		name: 'VINCI Staking Dashboard',
		image: vinci,
		description:
			'Blockchain NFT Platform. Created a front-end app for their staking dashboard using Web3 conecting to their smart contracts to stake tokens',
		link: 'https://byvinci.io',
		linkName: 'byvinci.io'
	},

	{
		name: 'Koru Network',
		image: koru,
		description:
			'I founded and stablished a minecraft server with more than 100.000 unique players and a team of 40+ staff members around the globe',
		link: 'https://www.linkedin.com/company/korunetwork/',
		linkName: 'linkedin.com'
	},
	{
		name: 'Illitia Software',
		image: ilitia,
		description:
			'SaaS to manage fertility centers. Rebranded the whole project and restructured the majority of the components changing styles and functionality',
		link: 'https://ilitiasolution.com/en/',
		linkName: 'ilitiasolution.com'
	},
	{
		name: 'This Website',
		image: portfolio,
		description:
			'A small SvelteKit application using TailwindCSS for the styling to show my skills and projects to the rest of the world',
		link: '#',
		linkName: 'you are here lol'
	},
	{
		name: 'Delcom Wave',
		image: delcom,
		description:
			"SaaS to manage sportcenter's bookings and products. Worked in many of its main features and implemented E2E testing in all the applications",
		link: '	https://www.delcom.nl/',
		linkName: 'delcom.nl'
	},

	{
		name: 'Viajes Mundomanía',
		image: viajes,
		description:
			'A short-term travel agency within Spain. I developed their website according to their "retro" design and automated their booking systems',
		link: 'https://viajesmundomania.com',
		linkName: 'viajesmundomania.com'
	}
];
