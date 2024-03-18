import java.util.function.Function;


public class Main {

    public static void main(String[] args) {
       Convert converter=new Convert();
       System.out.println(converter.apply(25.0));
    }

}

class Convert implements Function<Double,Double>{

 public Double apply(Double Celsius){
     //convert the value
     return (Celsius * 9/5) + 32;
 }
}
