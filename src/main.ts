export function main(input: number[]) {
	let result: number[] = [];
	for (let i = 0; i < input.length; i++) {
		const res = input.reduce((acc, cur) => acc * cur, 1);
		if (input[i] === 0) {
			const copy = [...input];
			copy.splice(i, 1);
			result.push(copy.reduce((acc, cur) => acc * cur, 1));
		} else {
			result.push(res / input[i]);
		}
	}
	return result;
}