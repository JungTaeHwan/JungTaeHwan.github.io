import java.util.HashSet;
import java.util.Set;

class Solution {
    public int solution(int[] nums) {
        Set<Integer> tempSet = new HashSet<>();
        
        for (int number : nums) {
            tempSet.add(number);
            if (tempSet.size() >= nums.length / 2) {
                break;
            }
        }
        
        return Math.min(tempSet.size(), nums.length / 2);
    }
}