function solution(dartResult) {
	const bonus = {'S': 1, 'D': 2, 'T': 3};

	const option = {'*': 2, '#': -1};

	const procArr = dartResult.match(/(\d+\D+)/g).reduce((arr, item, idx) => {

		const len = item.startsWith('10') ? 2 : 1;

		arr.push(item.substring(0, len) ** bonus[item[len]]);
		const optionVal = option[item[len+1]] ?? 1;

		if (!(optionVal < 2 || idx == 0)) {
			arr[idx - 1] *= optionVal;
		}

		arr[idx] *= optionVal;

		return arr;
	}, []);

	return procArr.reduce((acc, el) => acc + el, 0);
}