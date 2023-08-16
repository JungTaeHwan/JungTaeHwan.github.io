function solution(n, m, section) {
    let temp = 0;

    return section.reduce((acc, el) => {
        if (el > temp) {
            temp = el + m - 1;
            acc++;
        }
                
        return acc;
    }, 0);
}