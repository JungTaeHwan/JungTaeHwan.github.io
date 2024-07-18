function solution(line) {
    const set = new Set();
    let maxX = -Infinity, maxY = -Infinity, minX = Infinity, minY = Infinity;

    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const [a, b, c] = line[i];
            const [d, e, f] = line[j];
            const determinant = a * e - d * b;

            if (determinant == 0) continue;

            const x = (b * f - e * c) / determinant;
            const y = (d * c - a * f) / determinant;

            if (Number.isInteger(x) && Number.isInteger(y)) {
                set.add(`${x},${y}`);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
            }
        }
    }

    const meet = [...set].map(point => {
        const [x, y] = point.split(',').map(Number);
        return [x - minX, maxY - y];
    });

    const board = Array.from({ length: maxY - minY + 1 }, () => Array(maxX - minX + 1).fill('.'));

    meet.forEach(([x, y]) => {
        board[y][x] = '*';
    });

    return board.map(row => row.join(''));
}




function solution(line) {
    const set = new Set();
    let [maxX, maxY, minX, minY] = [-Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
 
    for (let i = 0; i < line.length; i++) {
       for (let j = i + 1; j < line.length; j++) {
          let x, y;
          const [x1, y1, z1] = line[i];
          const [x2, y2, z2] = line[j];
 
          if (x1 != 0 && x2 != 0) {
             y = (x2 * -z1 + x1 * z2) / -(x2 * -y1 + x1 * y2);
             x = -(y1 * y + z1) / x1;
          } else if (y1 != 0 && y2 != 0) {
             x = (y2 * -z1 + y1 * z2) / -(y2 * -x1 + y1 * x2);
             y = -(x1 * x + z1) / y1;
          } else {
             if ((x1 == 0 && x2 == 0) || (y1 == 0 && y2 == 0)) {
                continue;
             } else if (x1 == 0) {
                y = -z1 / y1;
                x = -(y * y2 + z2) / x2;
             } else if (y1 == 0) {
                x = -z1 / x1;
                y = -(x * x2 + z2) / y2;
             }
          }
 
          if (Number.isInteger(x) && Number.isInteger(y)) {
             set.add(`${x},${y}`);
 
             maxX = Math.max(maxX, x);
             maxY = Math.max(maxY, y);
             minX = Math.min(minX, x);
             minY = Math.min(minY, y);
          }
       }
    }
 
    const meet = [...set].map(s => {
        const [x, y] = s.split(',')
        return [x - minX, y - minY];
    });
 
    const board = Array.from({length: maxY - minY + 1}, () => Array(maxX - minX + 1).fill('.'));

    meet.forEach(([x, y]) => {
       board[y][x] = '*'
    });
 
    return board.map(el => el.join('')).reverse();
 }