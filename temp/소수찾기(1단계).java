
import java.util.*;

class Solution {
    public int getPrimeCount(int n) {
        int cnt = 1;

        public boolean isPrime(int num) {
            for (int i = 3; i <= Math.sqrt(num); i += 2) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }

        if (n > 2) {
            for (int i = 3; i <= n; i += 2) {
                if (isPrime(i)) {
                    cnt++;
                }
            }
        }

        return cnt;
    }
}