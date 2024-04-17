function solution(bandage, health, attacks) {
    const [duration, heal, plus] = bandage;

    return attacks.reduce((result, [sec, attack], idx) => {
        if (result > 0) {
            if (idx) {
                const remain = sec - attacks[idx - 1][0] - 1;

                if (remain) {
                    result += remain * heal + Math.floor(remain / duration) * plus;

                    if (result > health) {
                        result = health;
                    }
                }
            }

            return result - attack || -1;
        } else {
            return -1;
        }
    }, health);
}

function solution(bandage, health, attacks) {
    const [duration, heal, plus] = bandage;
    let prv, remain, result = health;
    
    for(const [second, damage] of attacks){
        if(result <= 0) return -1;
        
        if (prv) {
            remain = second - prv - 1;

            if (remain) {
                result += remain * heal + Math.floor(remain / duration) * plus;
    
                if (result > health) result = health;
            }
        }

        result -= damage;
        prv = second;
    }
    
    return result <= 0 ? -1 : result;
}