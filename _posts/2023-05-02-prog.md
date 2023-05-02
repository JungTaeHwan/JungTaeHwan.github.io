---
title: "프로그래머스 - 문자열 내림차순"
---


# __part1. 문자열 내림차순__

    
### _python_
```python
    def solution(s):
        answer = ''

        answer = ''.join(sorted(list(s), reverse=True))

        return answer
```
<hr/>

### _java_
```java
    public String getDescSorting(String s) {
        String result = "";
        String strList [] = new String[s.length()];

        for (int i = 0; i < s.length(); i++) {
            strList[i] = String.valueOf(s.charAt(i));
        }

        Arrays.sort(strList, Comparator.reverseOrder());
        result = Arrays.stream(strList).reduce("", (acc, item) -> acc + item);

        return result;
    }   
```
<hr/>

### _js_
```js
    function fn_getString(string){
        const charList = [];

        for (const char of string) {
            charList.push(char);
        }

        return charList
            .sort((a, b) => a > b ? -1 : 1)
            .reduce((acc, item) => acc += item, '');
    }
```
<hr/>