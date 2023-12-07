function solution(s, skip, index) {
    return Array.from(s, char => {
        let cnt = 0;
        let ascii = char.charCodeAt() + index;

        skip.forEach(el => {
            let temp = ascii + cnt;

            if(temp > 122){
                
                temp -= 26;
                if((el > char && el <= 'z') || el <= String.fromCharCode(temp)){
                    cnt++;
                }
                
            }else{
                if(el => el > char && el <= String.fromCharCode(temp)){
                    cnt++
                }

            }
        })


        return String.fromCharCode(ascii + cnt);
    }).join('');
}


function solution(s, skip, index) {
    let alArr = Array.from({length: 'z'.charCodeAt() - 'a'.charCodeAt() + 1}, (el, idx) => String.fromCharCode(idx + 'a'.charCodeAt()));

    alArr = alArr.filter(el => !skip.includes(el));

    return Array.from(s, char => alArr[(alArr.indexOf(char) + index) % alArr.length]).join('');
}