function solution(id_list, report, k) {
    const reportObj = {};
    const reportCnt = {};

    id_list.forEach(el => {
        reportObj[el] = [];
        reportCnt[el] = 0;
    })
    
    report.forEach(el => {
        [reporter, troller] = el.split(' ');
        if(!reportObj[reporter].includes(troller)) {
            reportObj[reporter].push(troller);
            reportCnt[troller] += 1;
        }
    })
    
    return id_list.map(el => 
        reportObj[el].reduce((acc, item) => reportCnt[item] >= k ? acc + 1 : acc, 0)
    );
}
