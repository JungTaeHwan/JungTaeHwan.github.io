class Solution {
    public int solution(int n) {
        int answer = 1;
        boolean trigger = true;
        
        for(int i = 3; i <= n; i += 2){
            trigger = true;
            for(int j = 3; j <= Math.sqrt(i); j+=2){
                if(i % j == 0){
                    trigger = false;
                    break;
                }
            }
            if(trigger){
                answer++;
            }
        }
        return answer;
    }
}
