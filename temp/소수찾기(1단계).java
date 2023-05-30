class Solution {
    public int solution(int n) {
        int answer = 0;
        boolean trigger = true;
        
        for(int i = 2; i <= n; i++){
            trigger = true;
            for(int j = 2; j <= Math.sqrt(i); j++){
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