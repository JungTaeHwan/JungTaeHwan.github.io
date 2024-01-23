function solution(str1, str2) {
    const convertArray = (str) => {
        str = str.toLowerCase();
        const arr = [];

        for (let i = 0; i < str.length - 1; i++) {
            const [char1, char2] = [str[i], str[i + 1]];

            if (isAlphabet(char1) && isAlphabet(char2)) {
                arr.push(char1 + char2);
            }
        }

        return arr;
    };

    const isAlphabet = (char) => {
        return char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
    };

    const [A, B] = [convertArray(str1), convertArray(str2)];

    if (!A.length && !B.length) {
        return 2 ** 16;
    }

    let union = 0, intersection = 0;

    const findAndRemove = (el) => {
        const index = B.indexOf(el);
        
        if (index != -1) {
            B.splice(index, 1);
            return true;
        }
        
        return false;
    };

    A.forEach(el => {
        if (findAndRemove(el)) {
            intersection++;
        }
    });

    union = A.length + B.length;


    return Math.floor((intersection / union) * (2 ** 16));
}


function solution(str1, str2) {
    const convertArray = (str) => {
        str = str.toLowerCase();
        const arr = [];

        for (let i = 0; i < str.length - 1; i++) {
            const [char1, char2] = [str[i], str[i + 1]];

            if (char1.charCodeAt() < 97 || char1.charCodeAt() > 122) {
                continue;
            }

            if (char2.charCodeAt() < 97 || char2.charCodeAt() > 122) {
                i++;
                continue;
            }

            arr.push(char1 + char2);
        }

        return arr;
    };

    const arr1 = convertArray(str1);
    const arr2 = convertArray(str2);

    if(!arr1.length && !arr2.length){
        return 2**16;
    }

    let union = 0, intersection = 0;
    
    let temp = [...arr2];
    let index;
    
    const flag = (el) =>  {
        return temp.some((item,idx) => {
                    if(item == el){
                        index = idx
                        return true;
                    }else{
                        return false;
                    }
            })   
    };
    
    arr1.forEach(el => {
        if(flag(el)){
            intersection++;
            temp = temp.filter((el, idx) => idx != index);
        }
    })

    union = arr1.length + arr2.length - intersection;

    return Math.floor(intersection / union * (2**16));
}


