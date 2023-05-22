#include <stdio.h>
#include <signal.h>
#include <stdbool.h>
#include <pthread.h>

void handle_sigint(int arg) {
    printf("handle_sigint, thread: %ld\n", pthread_self());
    pthread_exit(NULL);
}

int main(int argc, char* argv[]) {
    printf("main, thread: %ld\n", pthread_self());

    // ctl + C
    signal(SIGINT, handle_sigint);

    while (true) {
    }
    return 0;
}