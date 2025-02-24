import {describe, it, expect} from 'vitest';
import { main } from "./main";

const inputs = [
	[2, 3, 4],
	[1, 2, 0, 4],
	[3, 0, 4, 0],
	[-1, 2, -3, 4],
	[5],
	[2, 3],
]

const outputs = [
	[12, 8, 6],
	[0, 0, 8, 0],
	[0, 0, 0, 0],
	[-24, 12, -8, 6],
	[1],
	[3, 2],
]

describe('main', () => {
	inputs.forEach((input, index) => {
		it(`should return [${outputs[index]}] when input is [${input}]`, () => {
			expect(main(input)).toEqual(outputs[index]);
		});
	});
});