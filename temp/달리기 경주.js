function solution(players, callings) {

    const playInfo = players.reduce((obj, player, idx) => {
        obj[player] = {
            rank: idx + 1,
            front: players[idx - 1] ?? '',
            back: players[idx + 1] ?? '',
        };
        return obj;
    }, {})

    callings.forEach(name => {
        const {front, back} = playInfo[name];
        const fof = playInfo[front].front;

        playInfo[name].front = fof;
        playInfo[name].back = front;

        playInfo[front].front = name;
        playInfo[front].back = back;

        if (back) playInfo[back].front = front;
        if (fof) playInfo[fof].back = name;

        playInfo[name].rank -= 1;
        playInfo[front].rank += 1;
    })

    return Object.keys(playInfo).sort((p1, p2) => playInfo[p1].rank - playInfo[p2].rank);
}

function solution(players, callings) {
    const playMap = players.reduce((obj, player, idx) => {
        obj[player] = idx;
        return obj;
    }, {});

    return callings.reduce((acc, player) => {
        const idx = playMap[player];
        const front = players[idx - 1];

        players[idx - 1] = player;
        players[idx] = front;

        playMap[player] -= 1;
        playMap[front] += 1;

        return players;
    }, players);
}