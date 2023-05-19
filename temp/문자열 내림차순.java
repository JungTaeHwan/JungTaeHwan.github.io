import java.util.*;
import java.util.stream.Stream;


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
