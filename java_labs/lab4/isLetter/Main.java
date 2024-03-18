import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        String str = "HelloWorld";

        boolean result = str.chars().allMatch(Character::isLetter);

        if (result) {
            System.out.println("Correct Statement.");
        } else {
            System.out.println("In correct String.");
        }
    }
}

