function solution(board) {
    const v = board.length;
    const w = board[0].length;

    let checkVal = 0;

    for (let i = 0; i < v; i++) {
        for (let j = 0; j < w; j++) {
            if (i > 0 && j > 0 && board[i][j] === 1) {
                board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
            }
            checkVal = checkVal >= board[i][j] ? checkVal : board[i][j];
        }
    }

    return checkVal * checkVal;
}

/*function solution(board)
{
            const v = board.length;
            const w = board[0].length;

            let checkVal = v >= w ? w : v;

            let a= 0, b = 0;

            while(checkVal > 1) {

                const checkList = board.slice(a, checkVal + a).flatMap(el => el.slice(b, checkVal+ b));   

                if(!checkList.some(el => el == 0)){
                    return checkVal * checkVal;
                }


                if(checkVal + a == v && checkVal + b == w){
                    checkVal--;
                    a = 0;
                    b = 0;
                }else if(checkVal + b != w){
		            b++;
                }else{
                    b = 0;
                    a++;
                }

	    }

	    if(checkVal == 1 && board.flat().some(el => el == 1)){
		    return 1;
	    }else{
		    return 0;
	    }

} 효율에서 탈락 */