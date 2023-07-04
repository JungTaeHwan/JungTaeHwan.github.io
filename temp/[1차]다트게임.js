function solution(dartResult) {
	const bonus = {'S': 1, 'D': 2, 'T': 3};

	const option = {'*': 2, '#': -1};

	const procArr = dartResult.match(/(\d+\D+)/g).reduce((arr, item, idx) => {

		const len = item.startsWith('10') ? 2 : 1;
		const optionVal = option[item[len+1]] ?? 1;

		arr.push(item.substring(0, len) ** bonus[item[len]] * optionVal);

		if (!(optionVal < 2 || idx == 0)) {
			arr[idx - 1] *= optionVal;
		}

		return arr;
	}, []);

	return procArr.reduce((acc, el) => acc + el, 0);
}

function solutionB(dartResult){
	const bonus = {'S': 1, 'D': 2, 'T': 3};
	const option = {'*': 2, '#': -1};

	let len, optionVal, resultArr = [];
	const procArr = dartResult.match(/(\d+\D+)/g);

	for (let i = 0; i < procArr.length; i++) {
		len = procArr[i].startsWith('10') ? 2 : 1;
		optionVal = option[procArr[i][len+1]] ?? 1;

		resultArr.push(procArr[i].substring(0, len) ** bonus[procArr[i][len]] * optionVal);

		if (!(optionVal < 2 || i == 0)) {
			resultArr[i - 1] *= optionVal;
		}
	}

	return resultArr.reduce((acc, el) => acc + el, 0);
}