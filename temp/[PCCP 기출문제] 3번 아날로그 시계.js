function solution(h1, m1, s1, h2, m2, s2) {
    const start = h1 * 3600 + m1 * 60 + s1;
    const end = h2 * 3600 + m2 * 60 + s2;
    
    const getCnt = (t) => {
       const meetMinute = Math.floor(t * 59 / (10 * 360));
       const meetHour = Math.floor(t * 719 / (120 * 360));

       return meetMinute + meetHour - (t >= (12 * 3600) ? 2 : 1);
    }

    const startCnt = (start * 59 % (10 * 360) == 0 || start * 719 % (120 * 360) == 0 ? 1 : 0);
    
    return getCnt(end) - getCnt(start) + startCnt;
}


function solution(h1, m1, s1, h2, m2, s2) {
    const totalSeconds = ((h2 - h1) * 60 + m2 - m1) * 60 + s2 - s1;
    const meetPoints = new Set();

    const hourHandPosition = (h, m, s) => (h * 30 + m / 2 + s / 120) % 360;
    const minuteHandPosition = (_, m, s) => (m * 6 + s / 10) % 360;
    const secondHandPosition = (s) => (s * 6) % 360;

    const findMeetings = (h, m, s, t, handPositionFn) => {
        const compLoc = handPositionFn(h, m, s);
        const sLoc = secondHandPosition(s);

        if (compLoc < sLoc) {
            if (t >= 60 - s) {
                h += Math.floor((m + 1) / 60);
                m = (m + 1) % 60;
                t -= 60 - s;

                findMeetings(h, m, 0, t, handPositionFn);
            }

            return;
        }

        const rawSecond = handPositionFn == minuteHandPosition ? 10 * (compLoc - sLoc) / 59 : 120 * (compLoc - sLoc) / 719;
        const meetSecond = Math.ceil(rawSecond);

        if (t >= meetSecond) {
            h += Math.floor((m + Math.floor((s + meetSecond) / 60)) / 60);
            m = (m + Math.floor((s + meetSecond) / 60)) % 60;

            const rs = (s + rawSecond) % 60;

            s = (s + meetSecond) % 60;
            t -= meetSecond;

            meetPoints.add(`${h}${m}${rs}`);

            if (rs == 0) {
                s += 1;
                t -= 1;
            }

            findMeetings(h, m, s, t, handPositionFn);
        }
    }

    findMeetings(h1, m1, s1, totalSeconds, hourHandPosition);
    findMeetings(h1, m1, s1, totalSeconds, minuteHandPosition);

    return meetPoints.size;
}


function solution(h1, m1, s1, h2, m2, s2){

    const hourHand = (hour, minute, second) => (hour * 30 + minute / 2 + second / 120) % 360;
    const minuteHand = (minute, second) => (minute * 6 + second / 10) % 360;
    const secondHand = (second) => (second * 6) % 360;

    const total = ((h2 - h1) * 60 + m2 - m1) * 60 + s2 - s1;

    const set = new Set();

    function getMinute(s, m, h, t){
        const mPosition = minuteHand(m, s);
        const sPosition = secondHand(s);

        if (mPosition < sPosition) {
            if(t >= 60 - s){
                h += Math.floor((m + 1) / 60);
                m = (m + 1) % 60;
                t -= 60 - s;

                getMinute(0, m, h, t);
            }

            return;
        }

        let meetSecond = Math.ceil(10 * (mPosition - sPosition) / 59);

        if (t >= meetSecond) {
            h += Math.floor((m + Math.floor((s + meetSecond) / 60)) / 60);
            m = (m + Math.floor((s + meetSecond) / 60)) % 60;

            const rs = (s + 10 * (mPosition - sPosition) / 59) % 60;

            s = (s + meetSecond) % 60;
            t -= meetSecond;

            set.add(`${h}${m}${rs}`);

            if(rs == 0){
                s += 1;
                t -= 1;
            }

            getMinute(s, m, h, t);
        }
    }

    function getHour(s, m, h, t){
        const hPosition = hourHand(h, m, s);
        const sPosition = secondHand(s);

        if (hPosition < sPosition) {
            if(t >= 60 - s){
                h += Math.floor((m + 1) / 60);
                m = (m + 1) % 60;
                t -= 60 - s;

                getHour(0, m, h, t);
            }

            return;
        }

        let meetSecond = Math.ceil(120 * (hPosition - sPosition) / 719);

        if (t >= meetSecond) {
            h += Math.floor((m + Math.floor((s + meetSecond) / 60)) / 60);
            m = (m + Math.floor((s + meetSecond) / 60)) % 60;

            const rs = (s + 120 * (hPosition - sPosition) / 719) % 60;

            s = (s + meetSecond) % 60;
            t -= meetSecond;

            set.add(`${h}${m}${rs}`);

            if(rs == 0){
                s += 1;
                t -= 1;
            }

            getHour(s, m, h, t);
        }
    }



    getMinute(s1, m1, h1, total);
    getHour(s1, m1, h1, total);

    return set.size;
}