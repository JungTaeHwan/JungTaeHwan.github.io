function solution(cards1, cards2, goal) {
    let cnt = 0;
    
    for (const word of goal) {
        if(cards1[0] == word){
            cards1.shift();
            cnt++;
        }else if(cards2[0] == word){
            cards2.shift();
            cnt++;
        }else{
            break;
        }
    }

    return cnt == goal.length ? 'Yes' : 'No';
}