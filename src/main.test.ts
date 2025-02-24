import {describe, it, expect} from 'vitest';
import { main } from "./main";

describe('main', () => {
	it('should return "Hello World!"', () => {
		expect(main()).toBe("Hello World!");
	});
});