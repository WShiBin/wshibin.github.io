#include <stdio.h>

struct date {
    char  day;
    short month;
    int   year;
} __attribute__((packed));

int main(int argc, char* argv[]) {
    struct date d = {0};
    printf("size:  %d\n", sizeof(d));
    printf("day:   %p\n", &d.day);
    printf("month: %p\n", &d.month);
    printf("year:  %p\n", &d.year);
    return 0;
}