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

                for (let j = 2; j < checkArr[i]; j++) {

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