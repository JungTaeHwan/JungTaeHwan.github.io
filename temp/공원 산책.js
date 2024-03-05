function solution(park, routes) {
    let initVal = [];

    park.some((row, yIdx) => {
        const xIdx = row.indexOf('S');
        if (xIdx != -1) {
            initVal = [yIdx, xIdx];
            return true;
        }
    });
    
    return routes.reduce((result, route) => {
        const [op, n] = route.split(' ');
        let [y, x] = result;

        for (let i = 0; i < n; i++) {
            switch (op) {
                case 'S': y++; break;
                case 'N': y--; break;
                case 'E': x++; break;
                case 'W': x--; break;
            }

            if (!park[y] || !park[y][x] || park[y][x] === 'X') {
                return result;
            }
        }

        return [y, x];
    }, initVal);
}