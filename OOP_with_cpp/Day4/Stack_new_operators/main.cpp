/**
 Author: Ahmed Nagy Abdulfattah
 Date : 12 nov 2023
 Under the Supervision of: (Eng:Mohammed Elgendy)
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

     Stack operator=(Stack &stcpy){
       ///reintialize the Size
       this->Size=stcpy.Size;

       ///new Top value
       this->top=stcpy.top;
       ///Reallocate the data of the caller Stack object
       delete[] this->_stack;
       _stack=new int[Size];

       ///copying the data manually
       for(int i=0;i<=top-(top==Size);i++)
         this->_stack[i]=stcpy._stack[i];

       return *this;
     }

     Stack operator+(Stack &stcpy)
     {
         cout<<"ConCating"<<"\n";
         Stack res;
         ///Reallocate the data of the Result Stack
          delete[] res._stack;

         res.Size=Size+stcpy.Size;
         res.top=top+stcpy.top;
         res._stack=new int[res.Size];

         ///Adding the data of the first Stack
         int i=0;
         for(i=0;i<=top-(top==Size);i++)
         {
             res._stack[i]=this->_stack[i];
         }

         ///Adding the data of the second Stack
         for(int j=0;j<=stcpy.top-(stcpy.top==stcpy.Size);j++)
         {
             res._stack[i+j]=stcpy._stack[j];
         }

         return res;
     }
     ///Print All
     void Print()
     {
         for(int i=0;i<=top-(top==Size);i++) ///Expression returns 1 if the top == Size
            cout<<_stack[i]<<comma;

            cout<<nl;
     }

     void FreeData(){ ///Damaging the data
        delete[] this->_stack;
        _stack=nullptr; ///Best Practice
     }

    ~Stack(){
        cout<<"Destructor is Called"<<nl;
        ///free the data
        FreeData();
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

    Stack st2;
    st2.Push(1);
    st2.Push(2);
    st2.Push(3);
    st2.Push(4);
    st2.Print();

   // viewContent(st2);
     Stack st3;
     st3=st1;
     st3.Print();
    ///Concating The Data
    (st1+st2).Print();

return 0;
}
