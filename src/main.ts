export function main(input: number[]) {
	let result: number[] = [];
	const totalProduct = input.reduce((acc, cur) => acc * cur, 1);

	for (let i = 0; i < input.length; i++) {
		if (input[i] === 0) {
			const copy = [...input];
			copy.splice(i, 1);
			result.push(copy.reduce((acc, cur) => acc * cur, 1));
		} else {
			result.push(totalProduct / input[i]);
		}
	}
	return result;
}