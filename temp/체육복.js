function solution(n, lost, reserve) {
    let temp = reserve;

    //sort해서 앞에서부터 훔치기
	lost.sort().forEach(el => {
        if(reserve.includes(el)){ //체육복 부자
            temp = temp.filter(item => el != item); //filter로 제외시키기
        }else if(!reserve.includes(el) && temp.includes(el-1)){ // 뒷사람 체육복 훔치기
            temp = temp.filter(item => el != item +1);
        }else if(!reserve.includes(el) && temp.includes(el+1)){ // 앞사람 체육복 훔치기
            temp = temp.filter(item => el != item -1);
        }
    });

    return n - lost.length + reserve.length - temp.length; // n - 안가져온 사람 + (실제로 줄 수 있는 사람)


    
    /* 	const gymSuit = Array(n).fill(1);
    
    lost.forEach(el => gymSuit[el-1]--);
    reserve.forEach(el => gymSuit[el-1]++);
    
    for(let i = 0; i < n; i++){
        if(gymSuit[i] == 0 && gymSuit[i-1] == 2){
            gymSuit[i-1] = 1;
            gymSuit[i] = 1;
        }else if(gymSuit[i] == 0 && gymSuit[i+1] == 2){
            gymSuit[i+1] = 1;
            gymSuit[i] = 1;
        }
    }
    

    return gymSuit.reduce((acc, el) => acc + (el >= 1 ? 1 : el), 0); // 진짜모름 ㅅㅂ */
}