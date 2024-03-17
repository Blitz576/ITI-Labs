#include <iostream>

using namespace std;

int main()
{
    int _size;
    cout<<"enter the array size : ";
    cin>>_size;
    int *arr=new int[_size];

    cout<<"Enter the elements of your array : \n";
    for(int i=0;i<_size;i++)
    {
        cin>>arr[i];
    }

    cout<<"You Entered : \n";
    for(int i=0;i<_size;i++)
    {
        cout<<arr[i]<<" , ";
    }

    ///freeing the array
     delete[] arr;

    return 0;
}
