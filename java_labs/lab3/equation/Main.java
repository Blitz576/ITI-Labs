import java.util.function.Function;
import java.util.function.BiFunction;

public class Main {

    public static void main(String[] args) {
        double a=1,b=-3,c=2;
        SolveEquation s=new SolveEquation();
        Coffecient co=new Coffecient(a,b,c);
        Roots result = s.apply(co);
        if(result != null){
            System.out.println("root values are: "+result.root1+","+result.root2);
        }else{
            System.out.println("Root values have imaginary number ");
        }

    }

}

class Roots{
    public double root1,root2;
    Roots(double _root1 , double _root2){
        root1=_root1;
        root2=_root2;
    }
}
 class Coffecient{
    public double a,b,c;
    Coffecient(double _a,double _b,double _c){
        a=_a;
        b=_b;
        c=_c;
    }
}

class SolveEquation implements Function<Coffecient,Roots>{
   public Roots apply (Coffecient c1){
        double determinant = c1.b * c1.b -(4* c1.a*c1.c);

        double sqr = Math.sqrt(determinant);
        if(determinant>0){

            double positiveRoot = (-c1.b + sqr)/(2*c1.a);
            double negativeRoot = (-c1.b - sqr)/(2*c1.a);

            return new Roots(positiveRoot, negativeRoot);
        }else if(determinant == 0){
            double root = (-c1.b + sqr)/(2*c1.c);

            return new Roots(root, root);
        }
        else {
            return null;
        }
    }

}
