function solution(number, limit, power) {
	let answer = 0;

	const getCnt = (num) => {
		let cnt = 0;

		for (let i = 1; i <= Math.sqrt(num); i++) {
			if(num % i == 0){
                i == Math.sqrt(num) ? cnt++ : cnt += 2;
			}

            if(cnt > limit){
                return power;
            }
		}

		return cnt;
	}

	for (let i = 1; i <= number; i++) {
		answer += getCnt(i);
	}

	return answer;
}