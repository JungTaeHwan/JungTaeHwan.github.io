function solution(today, terms, privacies) {

    const termsType = terms.reduce((acc, item) => {
        const [type, term] = item.split(' ');
        const [year, month, day] = today.split('.');

        acc[type] = year * 12 * 28 + month * 28 + Number(day) - term * 28;
        return acc;
    }, {});

    return privacies.reduce((result, pr, idx) => {
        const [date, type] = pr.split(' ');
        const [year, month, day] = date.split('.');

        if (year * 12 * 28 + month * 28 + Number(day) <= termsType[type]) {
            result.push(idx + 1);
        }

        return result;
    }, [])
}

function solution(today, terms, privacies) {

    const termsType = terms.reduce((obj, item) => {
        const [type, term] = item.split(' ');

        let [year, month, day] = today.split('.');
        month -= term;

        if (month < 0) {
            year = +year + Math.floor(month / 12);
            month = Math.ceil(Math.abs(month) / 12) * 12 + month;
        }

        if (month == 0) {
            year -= 1;
            month = 12;
        }

        obj[type] = `\${year}\${month < 10 ? '0' + month : month}\${day}`;

        return obj;
    }, {});

    return privacies.reduce((result, pr, idx) => {
        const type = pr.slice(-1);

        if (pr.replace(/\D/g, '') <= termsType[type]) {
            result.push(idx + 1);
        }

        return result;
    }, [])
}