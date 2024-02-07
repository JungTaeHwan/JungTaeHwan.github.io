function solution(cards) {
    const idxArr = cards.map(el => el - 1);

    let card = idxArr[0];
    const scores = []
    let openedArr = [];

    while (card !== undefined) {
        if (openedArr.includes(card)) {
            scores.push(openedArr.length);
            openedArr = [];
            card = idxArr[0];
        } else {
            const idx = idxArr.indexOf(card);
            idxArr.splice(idx, 1);
            openedArr.push(card);
            card = cards[card] - 1;
        }
    }


    if (scores.length > 1) {
        const maxScore = scores.splice(scores.indexOf(Math.max(...scores)), 1);
        const secondMaxScore = Math.max(...scores);
        return maxScore * secondMaxScore;
    } else {
        return 0;
    }
}