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
			'Capaz de enfrentar cualquier desafío técnico, Fran posee una gran habilidad de diseño acompañada de su abanico de herramientas como desarrollador, combinado con su atención al detalle y comunicación, un placer trabajar con él.',
		position: 'Tech Lead',
		company: 'Broken Rubik'
	},
	{
		name: 'Youssef Lehchiki',
		picture: youssef,
		description:
			'Recomiendo encarecidamente a Fran como desarrollador freelance. Es altamente competente, confiable y dedicado en su trabajo. Su experiencia y habilidades serán de gran valor para cualquier proyecto en el que se involucre.',
		position: 'Software Engineer',
		company: 'Delcom Wave'
	},
	{
		name: 'Manuel Manresa',
		picture: manuel,
		description:
			'Capaz de enfrentar cualquier desafío técnico, Fran posee una gran habilidad de diseño acompañada de su abanico de herramientas como desarrollador, combinado con su atención al detalle y comunicación, un placer trabajar con él.',
		position: 'Software Engineer',
		company: 'Delcom'
	},
	{
		name: 'Luis Enrique',
		picture: unknown,
		description:
			'Super competente, contacte con varios programadores que estuvieron a prueba y el que mejor resultado me dió con diferencia fue Fran, todo un acierto.',
		position: 'CEO',
		company: 'Viajes Mundomanía'
	}
];
