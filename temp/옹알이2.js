function solution(babbling) {
    const ableArr = ['aya', 'ye', 'woo', 'ma'];
    const regExp = new RegExp(ableArr.join('|'), 'g');
    
    return babbling.reduce((acc, babble) => {
        if(ableArr.every(word => !babble.includes(`${word}${word}`)) && babble.replace(regExp, '') == ''){
            acc += 1;
        }
        return acc;
    }, 0);
}