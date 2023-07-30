// 방법1
function solution(name, yearning, photo) {
    return photo.map(pi => pi.reduce((tot, el) => tot += yearning[name.indexOf(el)] ?? 0, 0));
}


// 방법2

