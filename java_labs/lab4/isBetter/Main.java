import java.util.function.BiPredicate;

public class Main {
    public static void main(String[] args) {
        String str1 = "Mahmoud";
        String str2 = "Elgendy";
        BiPredicate<String, String> isBetter = (firstString, secondString) -> firstString.length() > secondString.length();

        boolean result = isBetter.test(str1,str2);
        if(result){
            System.out.println("Better String");
        }else{
            System.out.println("Not Better String");
        }
    }
}

