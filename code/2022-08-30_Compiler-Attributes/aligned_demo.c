#include <stdio.h>

char c1                              = 'a';
char c2 __attribute__((aligned(16))) = 'b';
char c3                              = 'c';

int main(int argc, char* argv[]) {
    printf("c1: %p\n", &c1);
    printf("c2: %p\n", &c2);
    printf("c3: %p\n", &c3);
    return 0;
}