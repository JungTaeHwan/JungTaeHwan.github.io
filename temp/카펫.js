function solution(brown, yellow) {
    const plus = (brown - 8) / 2;
    const multiply = yellow - plus - 1;

    for (let i = 0; i <= plus; i++) {
        for (let j = i; j <= plus; j++) {
            if (i + j == plus && i * j == multiply) {
                return [j + 3, i + 3];
            }
        }
    }
}


function solution(brown, yellow) {
		let y = 3

		for (; y <= (2 * brown + 2 * yellow) / (brown + 4 - 2 * y); y++) {
			let x = (brown + 4) / 2 - y;
			if(brown + yellow == x * y){
				return [x, y];
			}
		}
	}

function solution(brown, yellow) {
    let [x, y] = [, 3]

    for (; ; y++) {
        x = (brown + 4) / 2 - y;

        if (brown + yellow == x * y) {
            return [x, y];
        }
    }
}