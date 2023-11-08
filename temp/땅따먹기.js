function solution(land) {
    /* return Math.max(...land.reduce((result, score) => {
            return score.map((num, step) => {
                return num + Math.max(...result.filter((el, idx) => idx != step));
            });
    
        }, Array(land[0].length).fill(0)));*/
        
    // return Math.max(...land.reduce((result, score) => {
    // 		return score.map((num, step) => {
    // 			const temp = [...result];
    // 			temp[step] = 0;
    // 			return num + Math.max.apply(null, temp);
    // 		});
    
    // 	}, Array(land[0].length).fill(0)));
        
    //     return Math.max(...land.reduce((result, score) => {
    // 		return score.map((num, step) => {
    // 			const temp = [...result];
    // 			temp[step] = 0;
    // 			return num + Math.max(...temp);
    // 		});
    
    // 	}, Array(land[0].length).fill(0)));
        
            const firstRow = land.shift();
    
        return Math.max(...land.reduce((result, score) => {
            result = result.map((el, idx) => {
                const temp = [...score];
                temp[idxArr[idx]] = 0;
    
                return el += Math.max(...temp);
            });
    
            return result;
        }, firstRow));
    }