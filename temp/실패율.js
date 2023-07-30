function solution(N, stages) {
    let usrNum = stages.length;

    let stageObj = stages.reduce((result, item) => {
        if (item != N + 1) {
            !result[item] ? result[item] = {cnt: 1} : result[item].cnt += 1
        }

        return result;
    }, {});

    for (let n = 1; n <= N; n++) {
        if(!stageObj[n]){
            stageObj[n] = {cnt : 0}
        }

        stageObj[n].frate = stageObj[n].cnt / usrNum;
        usrNum -= stageObj[n].cnt;
    }

    const stageList = Object.entries(stageObj).sort(
        ([key1, value1], [key2, value2]) => value2.frate - value1.frate == 0
            ? key1 - key2
            : value2.frate - value1.frate
    ).map(el => Number(el[0]));
    return stageList;
}

function solution(N, stages) {
    let usrNum = stages.length;

    let stageList = stages.reduce((result, item) => {
        if (item != N + 1) {
            result[item - 1] += 1;
        }
        return result;
    }, Array(N).fill(0));

    stageList = stageList.map((el, idx) => {
        const obj = {
            rate: el / usrNum,
            stage: idx + 1,
        };

        usrNum -= el;
        return obj;
    })

    stageList.sort((a, b) => b.rate - a.rate == 0 ? a.stage - b.stage : b.rate - a.rate)
    stageList = stageList.map(el => el.stage);

    return stageList;
}