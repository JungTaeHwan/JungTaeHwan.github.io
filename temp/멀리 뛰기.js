function solution(n) {
    let prior, before, answer;

    for (let i = 0; i < n; i++) {
        if(i == 0){
            before = 1;
            answer = before;
        }else if (i == 1){
            prior = 2;
            answer = prior;
        }else{
            answer = (prior + before) % 1234567;
            
            before = prior;
            prior = answer;
        }
    }

    return answer;
}