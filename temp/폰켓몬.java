import java.util.HashSet;
import java.util.Set;

class Solution {
    public int solution(int[] nums) {
        Set<Integer> tempSet = new HashSet<>();
        int limitCnt = nums.length / 2;
        
        for (int num : nums) {
            tempSet.add(num);
            if (tempSet.size() == limitCnt) {
                break;
            }
        }
        
        return Math.min(tempSet.size(), limitCnt);
    }
}