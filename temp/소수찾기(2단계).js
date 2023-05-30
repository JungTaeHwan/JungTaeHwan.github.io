function getPrimeNumberCount(strNum){

    const numArr = Array.from(strNum, el => Number(el));

    function makeNumArr(arr) {
        const result = [];

        function recursiveProc(cur) {
            if(cur.toString().length > arr.length) return;

            if (cur > 0) {
                result.push(cur);
            }

            for (let i = 0; i < arr.length; i++) {
                if((cur == 0 && arr[i] == 0) || [...cur.toString()].includes(arr[i].toString())){
                    continue;
                }

                const acc = cur * 10 + arr[i];

                recursiveProc(acc);
            }

        }

        recursiveProc(0);
        return result;
    }

    function getPrimeNumber(checkArr) {
        const confirmValue = [];

        for (let i = 0; i < checkArr.length; i++) {
            if(checkArr[i] != 1){
                let donPushTrg = 0;

                for (let j = 2; j < Math.sqrt(checkArr[i]); j++) {

                    if (checkArr[i] % j == 0) {
                        donPushTrg++
                    }

                    if(j+1 == checkArr[i] && donPushTrg == 0){
                        confirmValue.push(checkArr[i]);
                    }
                }
            }
        }

        return confirmValue;
    }

    return getPrimeNumber(makeNumArr(numArr)).length;
}



function solution(numbers) {
    return [...new Set(getPer(numbers))].filter(v => isPrime(v)).length;
}

const getPer = (str) => {
    const answer = [];
    const n = str.length;
    let ch = Array.from({ length: n }, () => 0);
    
    const dfs = (curStr) => {
        answer.push(+curStr);
        for (let i = 0; i < n; i++) {
            if (ch[i] === 0) {
                ch[i] = 1;
                dfs(curStr + str[i]);
                ch[i] = 0;
            }
        }
    }
    dfs('');
    answer.shift();
    return answer;
}

const isPrime = (n) => {
    if (n === 0 || n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}