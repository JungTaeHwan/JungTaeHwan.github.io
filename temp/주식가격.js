function solution(prices) {
	const result = Array(prices.length).fill(0);
	const stack = [];

	for (let i = prices.length - 1; i >= 0; i--) {
		while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
			stack.pop();
		}

		result[i] = stack.length > 0 ? stack[stack.length - 1] - i : prices.length - 1 - i;
		stack.push(i);
	}

	return result;
}