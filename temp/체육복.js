function solution(n, lost, reserve) {
    let temp = reserve;

	lost.sort().forEach(el => {
        if(reserve.includes(el)){
            temp = temp.filter(item => el != item);
        }else if(!reserve.includes(el) && temp.includes(el-1)){
            temp = temp.filter(item => el != item +1);
        }else if(!reserve.includes(el) && temp.includes(el+1)){
            temp = temp.filter(item => el != item -1);
        }
    });

    return n - lost.length + reserve.length - temp.length;

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