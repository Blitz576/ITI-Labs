/**
 Author: Ahmed Nagy Abdulfattah
 Date : 8 nov 2023
 Under the Supervision of: (Eng: Noha shady)
**/


#include <iostream>

#define nl "\n"  ///better for usability and faster than endl
#define comma "," ///better for usability
#define Size 7 ///better for maintaince


using namespace std;

class Stack{
   private:
       int _stack[Size]={0};
       int top=-1;
   public:
      ///Default Constructor
       Stack(){
          cout<<"Constructor is Called"<<nl;   ///flag
          for(int i=0;i<Size;i++)
                _stack[i]=0;
       }
     ///copy constructor

     Stack(Stack &cpy)
     {

         cout<<"Copy Constructor is Called"<<nl;   ///flag
         this->top=cpy.top;
         for(int i=0;i<=top-(top==Size);i++)
            this->_stack[i]=cpy._stack[i];
     }

     void Push(int data)
     {
         if(top==Size)
         {
             cout<<"Full Stack Please Try Again"<<nl;
             return ;
         }
         top++;
         _stack[top]= data;
     }
     bool Pop(int &PrevData)
     {
          if(top==-1){ ///the stack is empty
            return 0;
          }
          else{
             top--;
             if(top==-1)
                PrevData=-1;
            else
            PrevData=_stack[top];
            return 1;
          }
     }
     int GetTop(){
        return _stack[top];
     }
     ~Stack(){
        cout<<"Destructor is Called"<<nl;

     }
     ///Print All
     void Print()
     {
         for(int i=0;i<=top-(top==Size);i++) ///Expression returns 1 if the top == Size
            cout<<_stack[i]<<comma;

            cout<<nl;
     }

};
int main()
{
    Stack st1;
    st1.Push(5);
    st1.Push(6);
    st1.Push(7);
    st1.Push(8);
    st1.Print();
    Stack st2(st1);
    st2.Print();

}


/**
observation:
     output is:
        Constructor is Called   for(st1)
        5,6,7,8,
        Copy Constructor is Called  for(st2)
        5,6,7,8,
        Destructor is Called   for(st1)
        Destructor is Called   for(st2)

**/

