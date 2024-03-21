function solution(ingredient) {
    let answer=0, idx = 0;
    const storage = [];
    
    while(ingredient[idx]){
        if(ingredient.slice(idx, idx + 4).join('') == '1231'){
            ingredient.splice(idx, 4);
            answer++;
            idx = storage.pop() ?? 0;
        }else{
            if(ingredient[idx] == 1){
                storage.push(idx);
            }
            
            idx++;
        }
    }
    
    return answer;
    
}

function solution(ingredient) {
    let answer = 0;
    let idx = ingredient.indexOf(1);
    const storage = [];

    while (idx != -1) {
        if (ingredient.slice(idx, idx + 4).join('') == '1231') {
            answer++;
            ingredient.splice(idx, 4);
            idx = storage.pop() ?? ingredient.indexOf(1);
        } else {
            storage.push(idx);
            idx = ingredient.indexOf(1, idx + 1);
        }
    }

    return answer;
}



function solution(ingredient) {
    return ingredient.reduce((obj, stuff) => {
        obj.storage.push(stuff);

        if(obj.storage.slice(-4).join('') == '1231'){
            obj.storage.splice(-4);
            obj.hamburger++;
        }

        return obj;
    }, {storage: [], hamburger: 0}).hamburger;
}