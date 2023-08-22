function solution(n, m, section) {
    let temp = 0;

    return section.reduce((acc, el) => {
        if (el > temp) {
            temp = el + m - 1;
            acc++;
        }
                
        return acc;
    }, 0);

     /* let result = 0;
            let temp = 0;

            for (let i = 0; i < section.length; i = temp) {
                let next = i + 1;
                while(next < section.length){
                    if(section[next] - section[i] < m){
                        next++;
                    }else{
                        result++;
                        break;
                    }
                }
                temp = next;

                if(next == section.length){
                    result++;
                }
            }

            return result; */
}