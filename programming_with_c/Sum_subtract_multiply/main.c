#include <stdio.h>

int main() {
    int num1,num2;

    scanf("%d%d",&num1,&num2);

    int sum = num1 + num2,
    mul= num1 * num2,
    sub= num1 - num2;

    printf("%d + %d = %d\n"
           "%d * %d = %d\n"
           "%d - %d = %d",
           num1,num2,sum,
           num1,num2,mul,
           num1,num2,sub);


    return 0;
}
