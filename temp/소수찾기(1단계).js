function fn_getPopName(n){
    let cnt = 1;

    function isPrime(num) {

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if(num % i ==0){
                return false;
            }
        }
        return true;
    }

    if(n > 2){
        for (let i = 3; i <= n; i += 2) {
            if(isPrime(i)){
                cnt++
            }
        }
    }

    return cnt;
}