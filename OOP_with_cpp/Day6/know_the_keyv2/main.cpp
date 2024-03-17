#include <iostream>
#include<string.h>
#include<cstring>
#include<assert.h>
#include<string>

using namespace std;

#define null -32
int main()
{
    char key;
    ///scan the character

    key = getch();

    ///determining the type of the key

    if(key == null ) ///Extented key
    {

        key = getch();
        cout<<"the compound key value is"<<key<<"\n";
    }
    else {   /// Normal key
        cout<<"\n the key is normal with value: "<<key;
    }
    return 0;
}
