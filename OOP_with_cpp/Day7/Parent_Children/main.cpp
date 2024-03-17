#include <iostream>

using namespace std;


class Parent{
  protected:
      int x;
      int y;
  public:
     Parent(int _x=0,int _y=0):x(_x),y(_y){

     }
     ///Setters
     void setX(int _x)
     {
         this->x=_x;
     }
     void setY(int _y)
     {
        this->y=_y;
     }
     ///Getters
     int getX(){return x;}
     int getY(){return y;}
     ///PrintAll
     virtual void Print(){
        cout<<x<<" " <<y<<" ";
     }
     virtual int add(){
        return x+y;
     }
     virtual int mul(){
        return x*y;
     }
   friend ostream& operator<<(ostream& os,const Parent &p1);

};
///overloading the extraction operator
 ostream& operator<<(ostream& os,const Parent &p1)
{
       ///maybe violates the data
       os<<p1.x<<" "<<p1.y<<"\n";

       ///return the data from the stream
       return os;
}
class Child1:public Parent{
     int z;
 public:

     ///Constructor
     Child1(int _x,int _y,int _z):Parent(_x,_y)
     {
         this->z=_z;
     }
     ///Setters
     void setZ(int _z)
     {
           this->z=_z;
     }
     ///Getters
      int getZ(){return z;}
     ///PrintAll
     void Print(){
        Parent::Print();
        cout<<z<<"\n";
     }
     int add()
     {
         return Parent::add()+z;
     }
     int mul(){return Parent::mul()*z;}
};
class Child2:public Parent{
     int z;
     int a;
 public:
     ///Constructor
     Child2(int _x,int _y,int _z,int _a):Parent(_x,_y)
     {
         this->z=_z;
         this->a=_a;
     }
     ///Setters
     void setZ(int _z)
     {
           this->z=_z;
     }
     void setA(int _a){ this->a=_a;}
     ///Getters
      int getZ(){return z;}
      int getA(){return a;}
     ///PrintAll
     void Print(){
        Parent::Print();
        cout<<z<<" "<<"\n";
     }
     int add()
     {
         return Parent::add()+z+a;
     }
     int mul(){return Parent::mul()*z*a;}

};
void PrintData(Parent *ptrp)
{
    ptrp->Print();
}
int Add(Parent *ptrp){
  return ptrp->add();
}
int Mul(Parent *ptrp){
  return ptrp->mul();
}
int main()
{
    Parent p1(10,20);
    cout<<p1;
    cout<<"Sorry Let's continue"<<"\n";
    Child1 ch1(30,40,50);
    Child2 ch2(60,70,80,90);
    cout<<"our data is"<<"\n";
    PrintData(&ch1);
   cout<< Add(&p1)<<"\n";
   cout<<Mul(&ch1);
    return 0;
}
