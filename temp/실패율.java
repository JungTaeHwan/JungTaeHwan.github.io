import java.util.*;


class Solution {

    public int[] selectBdgExeN(int N, int[] stages) {
        Map<Integer, Map<String, Double>> exeBizObj = new HashMap<>();

        double len = stages.length;

        for (int i = 0; i < stages.length; i++) {
            if(stages[i] == N + 1) continue;
            Map<String, Double> tempObj = exeBizObj.getOrDefault(stages[i], new HashMap<>());
            tempObj.put("cnt", tempObj.getOrDefault("cnt", 0.0) + 1);
            exeBizObj.put(stages[i], tempObj);
        }

        for (int stg = 1; stg <= N; stg++) {
            Map<String, Double> tempObj = exeBizObj.getOrDefault(stg, new HashMap<>());
            tempObj.put("cnt", tempObj.getOrDefault("cnt", 0.0));
            tempObj.put("rate", tempObj.get("cnt") / len);
            exeBizObj.put(stg, tempObj);

            len -= tempObj.get("cnt");
        }

        List<Map.Entry<Integer, Map<String, Double>>> entries = new ArrayList<>(exeBizObj.entrySet());

        Collections.sort(entries, Comparator.comparing(entry -> entry.getValue().get("rate"),Comparator.reverseOrder()));


        int[] result = new int[N];

        for (int i = 0; i < result.length; i++) {
            result[i] = entries.get(i).getKey();
        }

        return result;
    }


    public int[] selectBdgExeN(int N, int[] stages) {
        Map<Integer, Double> exeBizObj = new HashMap<>();

        double len = stages.length;

        for (int i = 0; i < stages.length; i++) {
            if(stages[i] < N + 1){
                exeBizObj.put(stages[i], exeBizObj.getOrDefault(stages[i], 0.0) + 1);
            }
        }

        for (int stg = 1; stg <= N; stg++) {
            double cnt = exeBizObj.getOrDefault(stg, 0.0);
            if(cnt == 0.0){
                exeBizObj.put(stg, cnt);
            }else{
                exeBizObj.put(stg, exeBizObj.get(stg) / len);
                len -= cnt;
            }

        }

        List<Map.Entry<Integer, Double>> entries = new ArrayList<>(exeBizObj.entrySet());

        Collections.sort(entries, Comparator.comparing(Map.Entry::getValue, Comparator.reverseOrder()));


        int[] answer = new int[N];

        for (int i = 0; i < answer.length; i++) {
            answer[i] = entries.get(i).getKey();
        }

        return answer;
    }
}