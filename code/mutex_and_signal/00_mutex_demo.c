// #include <stdio.h>
// #include <stdlib.h>
// #include <string.h>
#include <pthread.h>

static int             data = 0;
static pthread_mutex_t mtx  = PTHREAD_MUTEX_INITIALIZER;

void main_thread_func(void) {
    pthread_mutex_lock(&mtx);
    data++;
    pthread_mutex_unlock(&mtx);
}

int main(int argc, char* argv[]) {
    // ...
    return 0;
}