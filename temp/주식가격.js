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



	const arr = Array(prices.length).fill(0);

	for (let i = 0; i < prices.length; i++) {
		let cnt = 0;

		for (let j = i + 1; j < prices.length; j++) {
			cnt++;

			if(prices[i] > prices[j]){
				break;
			}
		}

		arr[i] = cnt;
	}

	return arr;


	// 보류코드
	return prices.map((el,idx) =>{
		let cnt =0;

		prices.slice(idx + 1).some(price => {
			cnt++;
			return price < el;
		})

		return cnt;
	});


	return prices.map((el,idx) =>{
		let cnt = 0;

		for (let i = idx + 1; i < prices.length; i++) {
			cnt++;

			if(el > prices[i]){
				break;
			}
		}

		return cnt;
	});

}