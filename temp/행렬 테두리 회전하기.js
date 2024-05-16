function solution(rows, columns, queries) {
    const arr = Array.from({length: rows}, (_, i) =>
            Array.from({length: columns}, (_, j) => columns * i + j + 1)
    );

    const conversion = (query) => {
        const [x1, y1, x2, y2] = query.map(c => c - 1);
        const temp = arr[x1][y1];
        let min = temp;

        for (let i = x1; i < x2; i++) {
            arr[i][y1] = arr[i + 1][y1];
            min = Math.min(min, arr[i + 1][y1]);
        }

        for (let i = y1; i < y2; i++) {
            arr[x2][i] = arr[x2][i + 1];
            min = Math.min(min, arr[x2][i + 1]);
        }

        for (let i = x2; i > x1; i--) {
            arr[i][y2] = arr[i - 1][y2];
            min = Math.min(min, arr[i - 1][y2]);
        }

        for (let i = y2; i > y1; i--) {
            arr[x1][i] = arr[x1][i - 1];
            min = Math.min(min, arr[x1][i - 1]);
        }

        arr[x1][y1 + 1] = temp;

        return min;
    };

    return queries.map(query => conversion(query));
}


function solution(rows, columns, queries) {
    const arr = Array.from({length: rows}, (_, i) =>
            Array.from({length: columns}, (_, j) => columns * i + j + 1)
    );

    const conversion = (query) => {
        const [x1, y1, x2, y2] = query.map(c => c - 1);
        const remainR = arr[x1][y2], remainL = arr[x2][y1];
        let minVal = Math.min(remainR, remainL);

        for (let i = y2; i > y1; i--) {
            arr[x1][i] = arr[x1][i - 1];
            minVal = Math.min(minVal, arr[x1][i - 1]);
        }

        for (let i = y1; i < y2; i++) {
            arr[x2][i] = arr[x2][i + 1];
            minVal = Math.min(minVal, arr[x2][i + 1]);
        }

        for (let i = 1; i < y2 - y1; i++) {

            arr[x2][y2] = remainR;
            arr[x1 - i][y1] = remainL;
        }

    };

    return queries.map(query => conversion(query));
}