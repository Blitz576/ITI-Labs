
/*
#include <iostream>
#include<graphics.h>
using namespace std;

int main()
{
    int gdriver=DETECT,gmode,errorcode;
    initgraph(&gdriver,&gmode,"");

    Closegraph();
    return 0;
}

*/

#include <iostream>
#include <thread>
#include <chrono>
#include<graphics.h>
#include<winbgim.h>
#include<windows.h>

int main() {
     int gdriver=DETECT,gmode,errorcode;
    initgraph(&gdriver,&gmode,"");
    rectangle(100,200,300,400);


    getch();
    closegraph();

    return 0;
}






    //this_thread::sleep_for(std::chrono::seconds(2));
