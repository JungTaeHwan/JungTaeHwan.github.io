function solution(numbers, target) {

    const dfs = (modArr, result) => {

        if (!modArr.length) {
            return result == target ? 1 : 0;
        }

        const delNum = modArr.shift();
        const plus = dfs([...modArr], result + delNum);
        const minus = dfs([...modArr], result - delNum);

        return plus + minus;
    }

    return dfs(numbers, 0)
}

function solution(numbers, target){
    let answer = 0;
    let delNum = numbers.shift();
    let temp = [-1, +1];
    numbers.map((el, i) =>{
      let queue = [];

      while(temp.length > 0){
        let element = temp.shift() * delNum;
        
        if(i == numbers.length-1){
          if(element - el == target || element + el == target)
            answer ++;
          continue;
        }

        queue.push(element - el);
        queue.push(element + el);
      }
      temp = queue;
    })
  
    return answer
  }