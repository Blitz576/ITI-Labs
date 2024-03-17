/**
 Author: Ahmed Nagy Abdulfattah
 Date : 8 nov 2023
 Under the Supervision of: (Eng: Noha shehab)
**/


#include <iostream>
#include<malloc.h>


#define nl "\n"  ///better for usability and faster than endl
#define comma "," ///better for usability


using namespace std;

class Stack{
   private:
       int Size=5;
       int *_stack=new int[Size];
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
         this->Size=cpy.Size;
         this->_stack=new int[Size];

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
             if(top==-1){
               PrevData=_stack[top+1];
               cout<<"End of the stack"<<nl;
               return 0;
             }
            else

            PrevData=_stack[top];
            return 1;
          }
     }
     bool isEmpty()
     {
         if(top==-1)
            return 0;
         else
            return 1;
     }
     int GetTop(){
         if(top==-1)
            return 0;

        return _stack[top];
     }
     ~Stack(){
        cout<<"Destructor is Called"<<nl;
        ///free the data
        FreeData();
     }
     void FreeData(){ ///Damaging the data
        delete[] this->_stack;
        _stack=nullptr; ///Best Practice
     }
     ///Print All
     void Print()
     {
         for(int i=0;i<=top-(top==Size);i++) ///Expression returns 1 if the top == Size
            cout<<_stack[i]<<comma;

            cout<<nl;
     }

};


void viewContent(Stack &Tmp)
{
    int i=0;
    int x=0;
    while(Tmp.Pop(x))
    {

        cout<<"the"<<i+1<<" Element is"<<x<<nl;
        i++;
    }

}

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
    viewContent(st2);

return 0;
}
