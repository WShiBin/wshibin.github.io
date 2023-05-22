#include <stdio.h>
#include <signal.h>
#include <stdbool.h>
#include <pthread.h>
#include <unistd.h>

#define log_debug(fmt, ...) printf("[%s:%d:%s] " fmt "\n", __FILE__, __LINE__, __FUNCTION__, ##__VA_ARGS__)

static pthread_mutex_t mtx = PTHREAD_MUTEX_INITIALIZER;

void foo(void) {
    pthread_mutex_lock(&mtx);
    printf("foo lock\n");
    usleep(100);
    pthread_mutex_unlock(&mtx);
    printf("foo lock\n");
}

void sig_handler(int arg) {
    pthread_mutex_lock(&mtx);
    printf("sighandler lock\n");
    usleep(100);
    pthread_mutex_unlock(&mtx);
    printf("handle unlock\n");
}

int main(int argc, char* argv[]) {
    while (true) {
        foo();
    }
    return 0;
}
