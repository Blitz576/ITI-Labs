/**
 Author : Ahmed Nagy
 Under the supervision of (ENG: Nadia Salah)

**/
#include <iostream>
#include<graphics.h>
#include<string.h>
#include <thread>
#include<chrono>
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

class Rectangle1 {
  Point Upper_left;
  Point Lower_right;
    public:
      Rectangle1():Upper_left(0,0),Lower_right(0,0){///Chaining

      }
      Rectangle1(int x1,int y1,int x2,int y2){
          Upper_left.setPoint(x1,y1);
          Lower_right.setPoint(x2,y2);
      }
      Rectangle1(Point &First,Point &Second)
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
      ~Rectangle1(){
         cout<<"Rectangle Destructor"<<"\n";
      }
      ///Drawing
      void draw(){ rectangle(Upper_left.getX(),Upper_left.getY(),Lower_right.getX(),Lower_right.getY()); }
};

class Circle1 {
  Point Center;
  int Radious;
  Point Begining;
    public:
      Circle1(int x,int y,int z){

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
      ///Drawing
      void draw(){ circle(Center.getX(),Center.getY(),Radious); }
};
class Triangle1 {
  Point Upper;
  Point Lower_right;
  Point Lower_Left;
    public:
      Triangle1(int x1,int y1,int x2,int y2,int x3,int y3){
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
class Picture{
    Rectangle1 *Rct;
    Circle1 *crs;
    int num_of_Rcts=0;
    int num_of_crss=0;
public:

    Picture(Rectangle1 *_Rct,Circle1 *_crs,int num1,int num2)
    {
        Rct=_Rct;
        crs=_crs;
        num_of_Rcts=num1;
        num_of_crss=num2;
    }
    ///draw the picture
    void Paint(){
       for(int i=0;i<num_of_Rcts;i++)
             Rct[i].draw();
       for(int i=0;i<num_of_crss;i++)
             crs[i].draw();
    }
    ~Picture(){
       ///destructing the data
       delete [] Rct;
       delete [] crs;

       ///Prevents the pointer dangling
       ///Good Practice
       Rct=nullptr;
       crs=nullptr;
    }

};
int main()
{
    int gdriver=DETECT,gmode,errorcode;
    initgraph(&gdriver,&gmode,"");

    Rectangle1 recto[3]={Rectangle1(100,100,200,200),Rectangle1(210,210,300,300),Rectangle1(310,310,400,400)};
    Circle1 cerco[3]={Circle1(50,50,10),Circle1(60,60,10),Circle1(70,70,10)};
    Picture Pic(recto,cerco,3,3);
    Pic.Paint();

    getch();
    closegraph();
    return 0;
}
