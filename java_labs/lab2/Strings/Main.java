import java.util.*;

public class Main {
    public static void main(String[] args) {

     String example="ITI develops people and ITI house of developers and ITI for people";

        System.out.println("using index: " + usingIndexOf(example,"ITI"));
        System.out.println("using split: " + usingSplit(example,"ITI"));
        System.out.println("String Tokenizer: "+ usingStringTokenizer(example,"ITI"));

    }

    public static int usingIndexOf(String sentence, String word) {
        int count = 0;
        int index = sentence.indexOf(word);
        while (index != -1) {
            count++;
            index = sentence.indexOf(word, index + 1);
        }
        return count;
    }

    public static int usingSplit(String sentence, String word) {
        int count = 0;
        String[] words = sentence.split(" ");
        for (String w : words) {
            if (w.equals(word)) {
                count++;
            }
        }
        return count;
    }

    public static int usingStringTokenizer(String sentence, String word) {
        int count = 0;
        StringTokenizer tokenizer = new StringTokenizer(sentence);
        while (tokenizer.hasMoreTokens()) {
            String token = tokenizer.nextToken();
            if (token.equals(word)) {
                count++;
            }
        }
        return count;
    }

}

