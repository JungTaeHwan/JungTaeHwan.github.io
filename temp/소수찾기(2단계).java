import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int solution(String numbers) {
        Set<Integer> set = new HashSet<>();
        
        recruFun(numbers, "", set);
        
        int answer = 0;
        for (Integer num : set) {
            int i;
            for (i = 2; i < num; i++) {
                if (num % i == 0) {
                    break;
                }
            }
            if (i == num) {
                answer++;
            }
        }
        return answer;
    }

    
    public void recruFun(String numbers, String str, Set<Integer> set) {
        int len = numbers.length();
        if (!"".equals(str)) {
            set.add(Integer.valueOf(str));
        }
        for (int i = 0; i < len; i++) {
            recruFun(numbers.substring(0, i) + numbers.substring(i + 1, len), str + numbers.charAt(i), set);
        }
    }


}