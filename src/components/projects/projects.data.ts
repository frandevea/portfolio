import type { Project } from '$lib/types/project.interface';
import koru from '$lib/images/projects/koru.png';
import viajes from '$lib/images/projects/viajesmundomania.jpg';
export const projects: Project[] = [
	{
		name: 'Koru Network',
		image: koru,
		description:
			'Koru Network, was a stablished minecraft server with more than 100.000 unique players. The server reached up to 40 staff members from all over the globe',
		link: 'string',
		linkName: 'linkedin.com'
	},
	{
		name: 'Viajes Mundomanía',
		image: viajes,
		description:
			'Viajes Mundomanía is a short-term travel agency within Spain. I developed their current website and automated their booking systems',
		link: 'string',
		linkName: 'linkedin.com'
	}
];
