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












function solution(board) {
    const getCheckSheet = (len) => {
        const [horizon, vertical, majorDiag, antiDiag] = [[], [], [], []];

        for (let i = 0; i < len; i++) {
            horizon.push(Array.from({length: len}, (_, idx) => i * len + idx))
            vertical.push(Array.from({length: len}, (_, idx) => i + len * idx))
            majorDiag.push(i * (len + 1));
            antiDiag.push((i + 1) * (len - 1));
        }

        return [...horizon, ...vertical, majorDiag, antiDiag];
    }

    const winOrNot = (arr) => {
        return checkSheet.some(answer => answer.every(el => arr.includes(el)));
    }

    const checkSheet = getCheckSheet(board.length);

    const myBoard = board.flatMap(el => el.split(''));

    const {o, x} = myBoard.reduce((obj, el, idx) => {
        if (el == 'O') {
            obj.o.push(idx);
        } else if (el == 'X') {
            obj.x.push(idx);
        }
        return obj;
    }, {o: [], x: []});

    const diff = o.length - x.length;

    if(diff == 0){
        return winOrNot(o) ? 0 : 1;
    }else if (diff == 1){
        return winOrNot(x) ? 0 : 1;
    }else{
        return 0;
    }
}





function solution(board) {
    const getCheckSheet = (len) => {
        const [horizon, vertical, majorDiag, antiDiag] = [[], [], [], []];

        for (let i = 0; i < len; i++) {
            horizon.push(Array.from({length: len}, (_, idx) => i * len + idx))
            vertical.push(Array.from({length: len}, (_, idx) => i + len * idx))
            majorDiag.push(i * (len + 1));
            antiDiag.push((i + 1) * (len - 1));
        }

        const mainSheet = [...horizon, ...vertical];
        mainSheet.push(majorDiag, antiDiag);

        return mainSheet;
    }

    const winOrNot = (arr) => {
        return checkSheet.some(answer => answer.every(el => arr.includes(el)));
    }

    const checkSheet = getCheckSheet(board.length);

    const {o, x} = board.flatMap(el => el.split(''))
        .reduce((obj, el, idx) => {
            if (el == 'O') {
                obj.o.push(idx);
            } else if (el == 'X') {
                obj.x.push(idx);
            }
            return obj;
        }, {o: [], x: []});

    const diff = o.length - x.length;
    
    if(winOrNot(o) && !winOrNot(x) && diff == 1){
        return 1;
    }else if (!winOrNot(o) && winOrNot(x) && diff == 0){
        return 1;
    }else if (!winOrNot(o) && !winOrNot(x) && [0, 1].includes(diff)){
        return 1;
    }else{
        return 0;
    }

}