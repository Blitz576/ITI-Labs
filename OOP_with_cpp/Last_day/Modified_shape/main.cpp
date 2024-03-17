/**
Author: Ahmed Nagy
Under The supervision of(Eng: Nadia Salah)
**/


#include <iostream>

using namespace std;
class Shape
{
protected:
    int dim1,dim2;
public:
    ///Default constructor
    Shape(int _dim1,int _dim2):dim1(_dim1),dim2(_dim2){}

    ///setters
    void setDim1(int _dim1){dim1=_dim1;}
    void setDim2(int _dim2){dim2=_dim2;}

    ///getters
    int getDim1(){return dim1;}
    int getDim2(){return dim2;}

    ///Pure virtual function
    ///Abstracted class
    virtual int CalcArea()=0;
};
class Rectangle:public Shape{
   public:
       Rectangle(int _dim1,int _dim2):Shape(_dim1,_dim2){

       }
      int CalcArea(){
         return dim1*dim2;
       }
};
class Square:public Rectangle{
   public:
       Square(int _dim1=1):Rectangle(_dim1,_dim1){

       }
       ///We Can Remove the comments but we can't remove setDim1

};

void Calc(Shape *sh)
{
    cout<<sh->CalcArea()<<"\n";
}
int main()
{
    Rectangle r1(2,4);
    Calc(&r1);
    Square sq(2);
    Calc(&sq);
    cout<<"After Changing the data "<<"\n";
    sq.setDim1(5);
    Calc(&sq);
    return 0;
}
