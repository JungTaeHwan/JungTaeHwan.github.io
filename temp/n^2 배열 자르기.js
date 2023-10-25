function solution(){
    return Array.from({length: right - left + 1},(v, idx) =>
                Math.max(Math.floor((left + idx) / n), (left + idx) % n) + 1
            ); //from 으로 초기화하는 것보다 fill()로 undefined 초기화 후 map돌리는게 속도가 더 빨랐음

            /*return Array(n ** 2).fill().reduce((r, e, i) => {
                if (i >= left && i <= right) {
                    r.push((Math.floor(i / n) <= i % n
                        ? i % n
                        : Math.floor(i / n)) + 1);
                }
                return r;
            }, []);

            const tempArr = Array(right - left + 1).fill(left);

            return Array(right - left + 1).fill(left).map((el, idx) => {
                const item = el + idx;
                return (Math.floor(item / n) <= item % n
                    ? item % n
                    : Math.floor(item / n)) + 1;
            });*/
}