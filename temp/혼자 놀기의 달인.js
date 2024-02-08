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

function solution(cards) {
    const scores = []
    const opened = [];
    const toOpen = [...cards];
    let [card] = toOpen;

    while (card) {
        if (opened.includes(card)) {
            scores.push(opened.length);
            opened.length = 0;
            [card] = toOpen;
        } else {
            const removeIndex = toOpen.indexOf(card);
            toOpen.splice(removeIndex, 1);
            opened.push(card);
            card = cards[card - 1];
        }
    }

    if (scores.length >= 2) {
        const maxScore = Math.max(...scores);
        scores.splice(scores.indexOf(maxScore), 1);
        const secondMaxScore = Math.max(...scores);
        return maxScore * secondMaxScore;
    } else {
        return 0;
    }
}

function solution(cards) {
    const scores = [];
    const opened = new Set();
    const toOpen = new Set(cards);
    const itr = toOpen.values();
    let card = itr.next().value;

    while (card) {
        if (opened.has(card)) {
            scores.push(opened.size);
            opened.clear();
            card = itr.next().value;
        } else {
            toOpen.delete(card);
            opened.add(card);
            card = cards[card - 1];
        }
    }

    if (scores.length >= 2) {
        const maxScore = Math.max(...scores);
        scores.splice(scores.indexOf(maxScore), 1);
        const secondMaxScore = Math.max(...scores);
        return maxScore * secondMaxScore;
    } else {
        return 0;
    }
}