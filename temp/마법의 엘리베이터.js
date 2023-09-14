function solution(storey) {
    let answer;

    function dfs(num, counter) {
        if (counter >= answer) return;
  
        if (num === 0){
            answer = counter;
        } else {
            let res = num % 10;
  
            dfs(Math.floor(num / 10), counter + res);
            dfs(Math.floor(num / 10) + 1, counter + 10 - res);
        }
    }
    dfs(storey, 0);
      
    return answer;

    /* let cnt = 0;
    const temp = [...(storey).toString()];

    for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i] >= 5) { 
            cnt += 10 - Number(temp[i]);

            if (i ==0) {
                if(temp[i] != 5){
                    cnt++;
                }
            } else {
                if(temp[i] != 5 || temp[i-1] >= 5){
                    temp[i - 1]++;
                }
            }
        } else {
            cnt += Number(temp[i]);
        }
    }

    return cnt; */
}