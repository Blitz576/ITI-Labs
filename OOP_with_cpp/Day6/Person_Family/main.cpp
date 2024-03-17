/**
 Author : Ahmed Nagy
 Under the supervision of (ENG: Nadia Salah)

**/

#include <iostream>
#include<string>
using namespace std;

class Person{
   protected:
       int id;
       char name[40];
       int age;
   public:
    Person(){
      id=-1;
      strcpy(name,"undefined");
      age=6;
    }
    Person(int _id,char *_name,int age):id(_id),age(_age){
      strcpy(name,_name);
    }
    ///Setters
    void setId(int _id){id=_id;}
    void setName(char* name){strcpy(name,_name);}
    void setAge(int _age){age=_age;}
    ///Getters
    int getId() const{return id;} ///LSP principle
    int getAge() const{return age;}
    char getName() const{return name;} ///LSP principle

    ///PrintAll
    void printAll()
    {
        cout<<id<<" " <<name<<" "<<age<<"\n";
    }
};
int main()
{
    cout << "Hello world!" << endl;
    return 0;
}
