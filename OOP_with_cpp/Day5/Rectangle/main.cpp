/**
 Author : Ahmed Nagy
 Under the supervision of (ENG: Mohamed El Gendy)

**/
#include <iostream>

using namespace std;

class Point {
   private:
       int x;
       int y;
   public:
    ///Default Constructor
    Point(): x(0),y(0){

    }

    Point(int _x,int _y) {
       setPoint(_x,_y); ///For Better Performance

    }
    void setPoint(int __x,int __y)
    {
        x=__x;
        y=__y;
    }
    void setX(int _x)
    {
        x=_x;
    }
    void setY(int _y)
    {
        y=_y;
    }
    int getX() const ///That function would never change the Data Members (LSP Principle)
    {
        return x;
    }
    int getY() const
    {
        return x;
    }
    Point operator=(Point const &Cpy){
     this->x=Cpy.x;
     this->y=Cpy.y;
     return *this;
    }
    ///PrintAll
    void print(){
       cout<<"("<<x<<","<<y<<")"<<"\n";
    }
    ~Point(){}
};

class Rectangle {
  Point Upper_left;
  Point Lower_right;
    public:
      Rectangle():Upper_left(0,0),Lower_right(0,0){///Chaining

      }
      Rectangle(int x1,int y1,int x2,int y2){
          Upper_left.setPoint(x1,y1);
          Lower_right.setPoint(x2,y2);
      }
      Rectangle(Point &First,Point &Second)
      {
          Upper_left=First;
          Lower_right=Second;
      }
      ///setters
      void setUpper(Point &Tmp)
      {
          Upper_left=Tmp;
      }
      ///over loading the Set by Passing values
      void setUpper(int __x,int __y)
      {
          Upper_left.setPoint(__x,__y);
      }

      void setLower(Point &Tmp)
      {
          Lower_right=Tmp;
      }
      ///over loading the Set by Passing values
      void setLower(int __x,int __y)
      {
          Lower_right.setPoint(__x,__y);
      }
      ///Getters
      Point getUpperLeft() const{
          return Upper_left;
      }
      Point getLower() const{
          return Lower_right;
      }
      ///PrintAll
      void print(){
         cout<<"Upper_Point"<<": ";
         Upper_left.print();
         cout<<"Lower_Point"<<": ";
         Lower_right.print();
      }
      ~Rectangle(){
         cout<<"Rectangle Destructor"<<"\n";
      }
};
class Circle {
  Point Center;
  int Radious;
  Point Begining;
    public:
      Circle(int x,int y,int z){

         Center.setPoint(x,y);
         Radious=z;
         Begining.setPoint( Center.getX()+Radious , Center.getY() );
      }
      ///setters
      void setCenter(Point &Tmp)
      {
          Center=Tmp;
      }
      int setRadious(int &_rad)
      {
          Radious=_rad;
      }
      ///Getters
      Point getCenter() const{
          return Center;
      }
      int getRadious() const{
          return Radious;
      }
      ///PrintAll
      void print(){
         cout<<"The Center Point is: ";
         Center.print();
         cout<<"The Begining Point is: ";
         Begining.print();
      }
};
class Triangle {
  Point Upper;
  Point Lower_right;
  Point Lower_Left;
    public:
      Triangle(int x1,int y1,int x2,int y2,int x3,int y3){
          Upper.setPoint(x1,y1);
          Lower_right.setPoint(x2,y2);
          Lower_Left.setPoint(x3,y3);
      }
      ///Setters
      void setUpper(Point &Tmp)
      {
          Upper=Tmp;
      }
      void setLowerRight(Point &Tmp)
      {
          Lower_right=Tmp;
      }
      void setLowerRight(int _x,int _y)
      {
          Lower_right.setPoint(_x,_y);
      }
      void setLowerLeft(Point &Tmp)
      {
          Lower_Left=Tmp;
      }
       ///Getters
      Point getUpper() const{
          return Lower_right;
      }
      Point getLowerRight() const{
          return Lower_right;
      }
      Point getLowerLeft() const{
          return Lower_Left;
      }
      ///PrintAll
      void print(){
         cout<<"Upper_Point"<<": ";
         Upper.print();
         cout<<"Lower_Right"<<": ";
         Lower_right.print();
         cout<<"Lower_Left"<<": ";
         Lower_Left.print();
      }
};
int main()
{
    Rectangle Rect(1,2,3,4);
    Rect.print();
    Circle cr(1,1,5);
    cr.print();
    Triangle tr(1,1,2,2,3,3);
    tr.print();
    cout<<"Setting values to the triangle "<<"\n";
    tr.setLowerRight(4,5);
    tr.print();
    cout<<"Setting values After Passing object of type Point to Triangle "<<"\n";
    Point tst(6,7);
    tr.setLowerRight(tst);
    tr.print();
    return 0;
}
