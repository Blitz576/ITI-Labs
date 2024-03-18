public class TwoVarsPrint {
    public static void main(String[] args) {
        if (args.length >1 ) {
            String value = args[0]; 
            try {
                int intValue = Integer.parseInt(value);
                for (int i = 0; i < intValue; i++) {
                    System.out.println(args[1]);
                }
            } catch (NumberFormatException e) {
                System.out.println("The entered value '" + value + "' is not an integer.");
            }
        } else {
            System.out.println("No arguments provided.");
        }
    }
}

