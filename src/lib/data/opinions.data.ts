import type { Opinion } from '../../lib/types/opinion.interface';
import lucas from '$lib/images/opinions/lucas.jpg';
import youssef from '$lib/images/opinions/youssef.jpg';
import manuel from '$lib/images/opinions/manu.jpg';
import unknown from '$lib/images/opinions/unknown.jpg';
export const opinions: Opinion[] = [
	{
		name: 'Lucas Goyeche',
		picture: lucas,
		description:
			'Able to tackle any technical challenge, Fran possesses great design skills coupled with his range of tools as a developer, combined with his attention to detail and communication, a pleasure to work with him.',
		position: 'Tech Lead',
		company: 'Broken Rubik'
	},
	{
		name: 'Manuel Manresa',
		picture: manuel,
		description:
			'With extensive experience and a constant drive to improve, Fran is an excellent candidate for any software project, big or small.',
		position: 'Software Engineer',
		company: 'Delcom'
	},
	{
		name: 'Luis Enrique',
		picture: unknown,
		description:
			'Super competent, I contacted several programmers who were tested and the one who gave me the best result by far was Fran, very good decision to choose him for our project.',
		position: 'CEO',
		company: 'Viajes Mundomanía'
	},
	{
		name: 'Youssef Lehchiki',
		picture: youssef,
		description:
			'Trustworthy, and dedicated to his work. His experience and skills will be invaluable to any project he is involved with.',
		position: 'Software Engineer',
		company: 'Delcom'
	}
];
