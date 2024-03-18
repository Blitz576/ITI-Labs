import java.util.function.Function;
import java.util.function.BiFunction;

public class Main {

    public static void main(String[] args) {

       CallingMethods c= new CallingMethods();
       c.callingTheMethods();
    }



   static class CallingMethods{
       public void callingTheMethods(){
           Methods caller= new Methods();
           try {

               caller.IsPositive(2);
               caller.IsPositive1(-2);
               caller.IsPositive2(2);

           }catch (NegativeNumberException e){
               e.printStackTrace();

           }finally {
               System.out.println("Program has finished");
           }

       }
    }
     static class Methods{
        public int IsPositive (int number) throws NegativeNumberException{
            if(number<0){
                throw new NegativeNumberException();
            }
            else
              return number;
        }
        public int IsPositive1 (int number) throws NegativeNumberException{
            if(number<0){
                throw new NegativeNumberException();
            }
            else
                return number;
        }
        public int IsPositive2 (int number) throws NegativeNumberException{
            if(number<0){
                throw new NegativeNumberException();
            }
            else
                return number;
        }
    }

}






class NegativeNumberException extends Exception {
    public NegativeNumberException() {
        super("Exception: Unexpected NegativeNumber");
    }
}

