function solution(wallpaper) {

    const obj = wallpaper.reduce((acc, [...row], i) => {

        row.forEach((el, j) => {
            if (el == '#') {
                acc.x.push(i);
                acc.y.push(j);
            }
        })

        return acc;
    }, {x: [], y: []})

    return [Math.min(...obj.x), Math.min(...obj.y), Math.max(...obj.x) + 1, Math.max(...obj.y) + 1];
}

function solution(wallpaper) {

    const {x, y} = wallpaper.reduce((acc, row, i) => {

        row.split('').forEach((el, j) => {
            if (el == '#') {
                acc.x.push(i);
                acc.y.push(j);
            }
        })

        return acc;
    }, {x: [], y: []})

    return [Math.min(...x), Math.min(...y), Math.max(...x) + 1, Math.max(...y) + 1];
}

// split과 spead의 속도차이
// * 이모지가 아닌 일반 문자로 이뤄진 문자열 테스트 *
// 1000만건 테스트 시  약 10배 이상
// Example with spread: 304.97705078125 ms
// Example with split: 14.555908203125 ms
// * 이모지로 이루어진 문자열 테스트 *
// 6500만건 테스트 시  약 1.5배 이상 
// Example with spread: 5411.427978515625 ms
// Example with split: 3636.801025390625 ms
// ==> split는 iterator를 제공하여 빠름
/*

전개 연산자는 즉시 새로운 배열 [ 'e', ​​'x', 'a', 'm', 'p', 'l', 'e' ]를 생성
배열에 대한 추가 메모리를 소비

split은 문자에 대한 반복자를 생성함
새로운 배열을 즉시 생성하지 않고 반복이 가능
전체 배열에 대해 한 번에 메모리를 할당할 필요가 없으므로 특히 큰 문자열의 경우 메모리 효율성이 향상 */