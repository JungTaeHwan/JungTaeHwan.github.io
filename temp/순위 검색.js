function solution(info, query) {
    let nInfo = info.map(el => el.split(' '));

    const nQuery = query.map((el, idx) => {
        const arr = el.split(' ').filter(text => text != 'and');
        arr.no = idx;
        return arr;
    });

    const result = Array(query.length).fill(0);

    nQuery.forEach((el, idx) => {
        const [lang, task, year, food, score] = el;
        const {no} = el;

        if (idx == 0 || score != nQuery[idx - 1][4]) {
            nInfo = nInfo.filter(([, , , , s]) => +s >= +score);
        }

        result[no] = nInfo.filter(([l, t, y, f]) =>
            (lang == '-' || lang == l)
            && (task == '-' || task == t)
            && (year == '-' || year == y)
            && (food == '-' || food == f)
        ).length;
    })

    return result;
}


function solution(info, query) {
    const infoMap = info.reduce((acc, item) => {
        const arr = item.split(' ');
        const score = +arr.pop();

        const id = arr.join('');
        acc[id] = !acc[id] ? [score] : [score, ...acc[id]].sort((a, b) => a - b);
        return acc;
    }, {});

    return query.map(q => {
        const where = q.split(' ').filter(el => !['and', '-'].includes(el));
        const score = where.pop();

        return Object.keys(infoMap)
            .filter(key => where.every(condition => key.includes(condition)))
            .reduce((cnt, key) => {
                const scoreArr = infoMap[key];
                cnt += scoreArr.slice(binarySearch(scoreArr, score)).length;
                return cnt;
            }, 0);
    });
}

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1
        }
    }

    return left;
}