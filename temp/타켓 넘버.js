function solution(numbers, target) {

    const dfs = (modArr, result) => {

        if (!modArr.length) {
            return result == target ? 1 : 0;
        }

        const delNum = modArr.shift();
        const plus = dfs([...modArr], result + delNum);
        const minus = dfs([...modArr], result - delNum);

        return plus + minus;
    }

    return dfs(numbers, 0)
}