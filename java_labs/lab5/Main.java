import java.util.*;

public class Main {
    public static void main(String[] args) {

        Map<Character, SortedSet<String>> dictionary = new HashMap<>();

//        SortedSet<String> wordsA = new TreeSet<>();
//        wordsA.add("ahmed");
//        wordsA.add("arnold");
//        wordsA.add("append");
//        wordsA.add("army");
//        dictionary.put('a', wordsA);
//
//        // Add words for 'b'
//        SortedSet<String> wordsB = new TreeSet<>();
//        wordsB.add("bicycle");
//        wordsB.add("ball");
//        wordsB.add("basket");
//        wordsB.add("book");
//        dictionary.put('b', wordsB);
//
//        // Add words for 'c'
//        SortedSet<String> wordsC = new TreeSet<>();
//        wordsC.add("cat");
//        wordsC.add("car");
//        wordsC.add("cup");
//        wordsC.add("computer");
//        dictionary.put('c', wordsC);
//
//        // Add words for 'd'
//        SortedSet<String> wordsD = new TreeSet<>();
//        wordsD.add("dog");
//        wordsD.add("door");
//        wordsD.add("desk");
//        wordsD.add("drive");
//        dictionary.put('d', wordsD);

       addWordToDictionary(dictionary,'a',"ahmed");
        addWordToDictionary(dictionary,'a',"apple");
        addWordToDictionary(dictionary,'a',"applet");
        addWordToDictionary(dictionary,'a',"able");
        addWordToDictionary(dictionary,'a',"army");
        addWordToDictionary(dictionary,'b',"banana");
        addWordToDictionary(dictionary,'b',"bancake");
        addWordToDictionary(dictionary,'c',"cat");
        addWordToDictionary(dictionary,'c',"car");






        dictionary.forEach(
                (k, v) -> {
                    System.out.println("letter: " + k);
                    System.out.print("values: ");
                    Iterator<String> it = v.iterator();
                    while (it.hasNext()) {
                        System.out.print(it.next()+ " ");
                    }
                    System.out.println("");
                }
        );
    }



    public static void addWordToDictionary(Map<Character,SortedSet<String>> targetDictionray ,char key ,String word){
        if(targetDictionray.containsKey(key)){
            SortedSet<String> charWords=targetDictionray.get(key);
            charWords.add(word);
        }else{
            targetDictionray.computeIfAbsent(key, k -> new TreeSet<>()).add(word);
        }

    }

}

