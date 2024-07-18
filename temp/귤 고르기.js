function solution(k, tangerine) {

    const tangerineMap = countItem(tangerine);

    const values = [...tangerineMap.values()];

    const countMap = countItem(values);

    const countKeys = [...countMap.keys()].sort((a, b) => b - a);

    let result = 0;

    while (k > 0) {
        const key = countKeys.shift();

        if (k > key) {
            const count = Math.min(Math.floor(k / key), countMap.get(key));
            k -= key * count;
            result += count;
        } else {
            result++;
            break;
        }
    }

    return result;
}

const countItem = (arr) => {
    return arr.reduce((map, item) => map.set(item, (map.get(item) || 0) + 1), new Map());
}