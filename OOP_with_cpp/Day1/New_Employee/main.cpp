#include <iostream>
#include <string.h>

using namespace std;

struct employee{

  private:
      int id;
      char name[20];
      int age;

  public:
    ///Setters
       void setId(int _id){
          if(_id<=10)
            id=0;
          else
           id=_id;
       }
       void setName(char *_name){
           if(strlen(_name)<3||strlen(_name)>=20)
                strcpy(name,"0");
           else
                strcpy(name,_name);
       }
       void setAge(int _age){
          if(_age<=0||_age>100)
             age=0;
          else
           age=_age;
       }

    ///Getters
       int GetId(){
          if(id==0){
            cout<<"Invalid id entered \n";
            return 0;
          }
          return id;
       }
       char *GetName(){
           if(strcmp(name,"0")==0){   ///Is Name =='0'
            cout<<"Invalid name entered \n";
            return "";
           }
          return name;
       }
       int GetAge(){
           if(age==0){
            cout<<"Invalid age entered \n";
            return 0;
           }
          return age;
       }

     void PrintData()
     {

         cout<<"Employee Data Is : \n";
         cout<<" id = "<<GetId()<<"\n name = "<<GetName()<<"\n age = "<<GetAge()<<"\n";
     }

};

///Print The Data Of any Type entered
void PrintData(employee Temp_Object)
{
         cout<<"Employee Data Is : \n";
         cout<<" id = "<<Temp_Object.GetId()<<"\n name = "<<Temp_Object.GetName()<<"\n age = "<<Temp_Object.GetAge()<<"\n";
}

int main()
{
    employee New_employee;
    int age,id;
    char name[20];
    cout<<"Enter Employee Id\n";
    cout<<"Note : Id Should Be More Than 10 \n";
    cin>>id;

    cout<<"Enter Employee Name\n";
    cout<<"Note : Name Should Be More 3 characters \n";
    cin>>name;

    cout<<"Enter Employee Age\n";
    cout<<"Note : Age Should Be More Than 0 and less than 100 \n";
    cin>>age;


    New_employee.setId(id);
    New_employee.setAge(age);
    New_employee.setName(name);
    New_employee.PrintData();
    return 0;
}


/**
observation:
    in the invalid data entered it still print the values of the data of employee
    it can be maintained in the inside of the class but it can't be maintained outside the class
    but in my opinion it's logical and best practice

**/
