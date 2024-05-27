function solution(n, l, r) {
    const result = [];

    const dfs = (lvl, left, right) => {
        const area = 5 ** (lvl - 1);

        if (lvl == 1) {
            result.push([1, 1, 0, 1, 1].reduce((acc, el, idx) => {
                if (idx >= left - 1 && idx <= right - 1) {
                    acc += el;
                }

                return acc;
            }, 0));

            return;
        }

        let alpha = 1, beta = 1;

        while (left > (area * alpha)) {
            alpha++;
        }

        while (right > (area * beta)) {
            beta++;
        }


        result.push([1, 2, 3, 4, 5].filter(el => el > alpha && el < beta).reduce((acc, el) => acc += el == 3 ? 0 : 4 ** (lvl - 1), 0));

        if (alpha == beta) {
            if (alpha == 3) {
                return;
            }
            return dfs(lvl - 1, left - (area * (beta - 1)), right - (area * (beta - 1)), result);
        } else {
            if (alpha != 3 && beta == 3) {
                return dfs(lvl - 1, left - (area * (alpha - 1)), area, result);
            } else if (alpha == 3 && beta != 3) {
                return dfs(lvl - 1, 1, right - area * (beta - 1), result);
            } else {
                return dfs(lvl - 1, left - (area * (alpha - 1)), area, result), dfs(lvl - 1, 1, right - area * (beta - 1), result);
            }
        }
    }

    dfs(n, l, r);

    return result.reduce((acc, el) => acc += el, 0);
}


function solution(n, l, r) {
    let answer = 0;
    for (let i = l - 1; i <= r - 1; i++) {
        if (!i.toString(5).match('2')) answer += 1;
    }
    return answer;
}


function solution(n, l, r) {
    const calculateSum = (lvl, left, right) => {
        if (lvl == 1) {
            return [1, 1, 0, 1, 1].slice(left - 1, right).reduce((acc, el) => acc + el, 0);
        }

        const area = 5 ** (lvl - 1);
        const alpha = Math.ceil(left / area);
        const beta = Math.ceil(right / area);

        if (alpha === beta) {
            return alpha === 3 ? 0 : calculateSum(lvl - 1, left - (area * (alpha - 1)), right - (area * (alpha - 1)));
        } else {
            let sum = 0;
            if (alpha !== 3) {
                sum += calculateSum(lvl - 1, left - (area * (alpha - 1)), area);
            }
            if (beta !== 3) {
                sum += calculateSum(lvl - 1, 1, right - (area * (beta - 1)));
            }
            sum += [1, 2, 4, 5].filter(el => el > alpha && el < beta).length * (4 ** (lvl - 1));
            return sum;
        }
    };

    return calculateSum(n, l, r);
}