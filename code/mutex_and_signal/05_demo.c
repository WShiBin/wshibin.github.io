#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <pthread.h>
#include <stdbool.h>

pthread_mutex_t mutex = PTHREAD_RECURSIVE_MUTEX_INITIALIZER;

void main_thread_func(void) {
    pthread_mutex_lock(&mutex);
    printf("Main thread: Got ths lock\n");
    usleep(100 * 1000);  // do something
    pthread_mutex_unlock(&mutex);
    printf("Main thread: Release ths lock\n");
}

void sig_handler(int num) {
    printf("sig handler\n");
    pthread_mutex_lock(&mutex);
    printf("Signal handle func: Got ths lock\n");
    usleep(100 * 1000);  // do something
    pthread_mutex_unlock(&mutex);
    printf("Signal handle func: Release ths lock\n");
}

int main(int argc, char* argv[]) {
    // handle ctrl-c
    signal(SIGINT, sig_handler);

    while (true) {
        main_thread_func();
    }

    return 0;
}