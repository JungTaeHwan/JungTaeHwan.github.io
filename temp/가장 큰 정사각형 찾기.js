function solution(board)
{
    const v = board.length;
    const w = board[0].length;
    let checkVal = v > w ? w : v;
    let checkList;

    if(checkVal == 1){
        return 0;
    }

    for (let i = checkVal; i > 1; i--){
        let j = 0;
        
        checkList = data.slice(j,i).flatMap(el => el.slice(j,i));
        
        if(!checkList.some(el => el == 0)){
            continue;
        }

    }
}