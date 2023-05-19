function fn_getString(string){
    const charList = [];

    for (const char of string) {
        charList.push(char);
    }

    return charList
        .sort((a, b) => a > b ? -1 : 1)
        .reduce((acc, item) => acc += item, '');
}