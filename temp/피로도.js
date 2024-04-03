function solution(k, dungeons) {
    const temp = [];

    const dfs = (num, arr, cnt) => {

        if(!arr.length) {
            temp.push(cnt);
            return;
        }

        arr.forEach(([min, minus], idx) => {
            if(num >= min){
                const next = [...arr];
                next.splice(idx, 1);
                dfs(num - minus, next, cnt + 1);
            }else{
                temp.push(cnt);
            }
        })

    }

    dfs(k, dungeons, 0);

    return Math.max(...temp);
}


function solution(k, dungeons) {

    const dfs = (num, arr, cnt) => {

        let maxCnt = cnt;

        if (!arr.length) {
            return cnt;
        }

        arr.forEach(([min, minus], idx) => {
            if (num >= min) {
                const next = [...arr];
                next.splice(idx, 1);
                maxCnt = Math.max(maxCnt, dfs(num - minus, next, cnt + 1));
            }
        });

        return maxCnt;
    }

    return dfs(k, dungeons, 0);
}