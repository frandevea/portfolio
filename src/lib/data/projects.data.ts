import type { Project } from '$lib/types/project.interface';
import koru from '$lib/images/projects/koru.png';
import viajes from '$lib/images/projects/viajesmundomania.png';
import portfolio from '$lib/images/projects/portfolio.png';
import ilitia from '$lib/images/projects/ilitia.png';
import vinci from '$lib/images/projects/vinci.png';
export const projects: Project[] = [
	{
		name: 'This Website',
		image: portfolio,
		description:
			'A small SvelteKit application using TailwindCSS for the styling to show my skills and projects to the rest of the world',
		link: 'https://twitter.com/home',
		linkName: 'you are here lol'
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
		name: 'VINCI Staking Dashboard',
		image: vinci,
		description:
			'Blockchain NFT Platform. Created a front-end app for their staking dashboard using Web3 authentication and conecting to their smart contracts to stake tokens',
		link: 'https://byvinci.io',
		linkName: 'byvinci.io'
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
		name: 'Viajes Mundomanía',
		image: viajes,
		description:
			'A short-term travel agency within Spain. I developed their website according to their "retro" design and automated their booking systems',
		link: 'https://viajesmundomania.com',
		linkName: 'viajesmundomania.com'
	}
];
