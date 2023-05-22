#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <pthread.h>
// #include <unistd.h>

// 方式1
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

int main(int argc, char* argv[]) {
    // 方式2
    pthread_mutex_t mutex;

    pthread_mutexattr_t attr;
    pthread_mutexattr_init(&attr);
    pthread_mutexattr_settype(&attr, PTHREAD_MUTEX_RECURSIVE);  // set type

    pthread_mutex_init(&mutex, &attr);

    return 0;
}