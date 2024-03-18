import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.function.BiFunction;

public class Main {

    public static void main(String[] args) {
        ArrayList<Rectangle> rect = new ArrayList<Rectangle>(2);
        Rectangle rect1=new Rectangle();
        Triangle tri1=new Triangle();
        rect.add(rect1);
        rect.add(rect1);

        ArrayList<Triangle> tri = new ArrayList<Triangle>(2);
        tri.add(tri1);
        tri.add(tri1);



        Test t = new Test();
        t.accepts(rect);
        t.accepts(tri);
    }




}


class Test{
    public void accepts(List<? extends Shape> list){
        for (Shape item : list){
            item.draw();
        }
    }

}

class Rectangle extends Shape{
    public void draw(){
        System.out.println("Rectangle is Drawed");
    }
}
class Triangle extends Shape{
    public void draw(){
        System.out.println("Triangle is Drawed");
    }
}

abstract class Shape{
    public abstract void draw();
}
