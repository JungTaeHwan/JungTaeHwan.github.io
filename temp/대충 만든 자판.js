  function solution(keymap, targets) {

    return targets.map(target => {
        let num = 0;

        for (const char of target) {
            const positions = keymap.reduce((acc, key) => {
                if (key.indexOf(char) !== -1) {
                    acc.push(key.indexOf(char))
                }
                return acc;
            }, [])

            if (positions.length) {
                num += Math.min(...positions) + 1;
            } else {
                num = -1;
                break;
            }
        }

        return num;
    });
}