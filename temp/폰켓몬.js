function fn_getPhone(){
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
    }
    let arr = [];

    for (let i = 0; i < 100; i++) {
        arr.push(getRandomIntInclusive(1,60))
    }

    const listT = Array.from(new Set(arr));

     return Math.min(listT.length, Math.floor(arr.length / 2));
}