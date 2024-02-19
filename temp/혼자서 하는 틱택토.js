function solution(board) {
    const getSheet = () => {
        const sheet = [];

        const [a, b] = [[], []];
        for (let i = 0; i < 3; i++) {
            const [c, d] = [[i, i + 3, i + 6], [i * 3, i * 3 + 1, i * 3 + 2]];
            sheet.push(c, d);
            a.push(i * 4);
            b.push((i + 1) * 2);
        }

        sheet.push(a, b);

        return sheet;
    }

    const winOrNot = (arr) => {
        
        return sheet.some(answer => answer.every(el => arr.includes(el)));
    }
    
    const sheet = getSheet();

    const nBoard = board.flatMap(el => el.split(''));

    const [Orr, Xrr] = [[], []]

    nBoard.forEach((el, idx) => {
        if (el == 'O') {
            Orr.push(idx);
        } else if (el == 'X') {
            Xrr.push(idx);
        }
    });
    
    const diff = Orr.length - Xrr.length;

    if(winOrNot(Orr) && !winOrNot(Xrr) && diff == 1){
        return 1;
    }else if (!winOrNot(Orr) && winOrNot(Xrr) && diff == 0){
        return 1;
    }else if (!winOrNot(Orr) && !winOrNot(Xrr) && [0, 1].includes(diff)){
        return 1;
    }else{
        return 0;
    }

}