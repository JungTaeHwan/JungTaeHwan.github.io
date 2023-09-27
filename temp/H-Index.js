function solution(citations) {
    const sum = citations.reduce((acc, el) => acc + el);
    let avg = Math.floor(sum / citations.length);
    let cnt = citations.filter(el => el >= avg).length;
    
    let answer;
    
    for (let i = 0; i < 10000 - avg; i++) {
    
        if(avg <= cnt){
            answer = avg
            avg++;
        }else{
            avg--;
        }
        
        cnt = citations.filter(el => el >= avg).length;
        
        if(answer == avg){
            break;
        }
        
	}
    
    return answer;
}

function solution(citations) {
    let cnt = 0;
    citations.sort((a, b) => b - a);
    
    for(const cite of citations){
        if(cite >= cnt + 1){
            cnt++;
        }else{
            break;
        }
    }

    return cnt;
}