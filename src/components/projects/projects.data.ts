import type { Project } from '$lib/types/project.interface';
import koru from '$lib/images/projects/koru.png';
import viajes from '$lib/images/projects/viajesmundomania.jpg';
export const projects: Project[] = [
	{
		name: 'Koru Network',
		image: koru,
		description:
			'I founded and stablished a minecraft server with more than 100.000 unique players. Created a team of 40+ staff members',
		link: 'https://www.linkedin.com/company/korunetwork/',
		linkName: 'linkedin.com'
	},
	{
		name: 'Viajes Mundomanía',
		image: viajes,
		description:
			'A short-term travel agency within Spain. I developed their current website and automated their booking systems',
		link: 'https://twitter.com/home',
		linkName: 'viajesmundomania.com'
	}
];
