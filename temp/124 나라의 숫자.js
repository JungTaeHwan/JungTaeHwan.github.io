function solution(n) {
    const obj = {
        1: 1,
        2: 2,
        3: 4,
    };
    
    let result = "";
    
    let analysis = n, divide = 1;
    
    while (analysis > 0){
        const r = Math.floor(analysis / divide) % 3;
        
        if(r){
            result = obj[r] + result;
            analysis -= divide * r;
        }else{
            result = obj[3] + result;
            analysis -= divide * 3;
        }
    
        
        divide *= 3;
    }

    return result; 
}

function solution(n) {
    const obj = {
        1: 1,
        2: 2,
        0: 4,
    };
    
    let result = "";
    
    let analysis = n, divide = 1;
    
    while (analysis > 0){
        const r = Math.floor(analysis / divide) % 3;
        result = obj[r] + result;
        analysis -= divide * (r || 3);
        divide *= 3;
    }

    return result; 
}

function solution(n) {
    const obj = {
        1: 1,
        2: 2,
        0: 4,
    };
    
    let result = "", analysis = n;
    
    while (analysis > 0){
        const r = analysis % 3;
        result = obj[r] + result;
        analysis -=  r || 3
        analysis /= 3;
    }

    return result; 
}