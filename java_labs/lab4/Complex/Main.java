
public class Main {
    public static void main(String[] args) {
        Complex<Integer, Integer> c = new Complex<>(10, 15);
        Complex<Integer, Integer> c2 = new Complex<>(12, 15);
        Complex<Integer, Integer> result = c.add(c2);
        result.print();
        
    }
}

class Complex<T extends Number, U extends Number> {
    private T real;
    private U img;

    Complex(T _real, U _img) {
        this.real = _real;
        this.img = _img;
    }

    public Complex<T, U> add(Complex<T, U> val) {
        double newReal = this.real.doubleValue() + val.real.doubleValue();
        double newImg = this.img.doubleValue() + val.img.doubleValue();
        return new Complex<>((T) Double.valueOf(newReal), (U) Double.valueOf(newImg));
    }

    public void print() {
        System.out.println( "(" + this.real + ", " + this.img + ")");
    }
}

