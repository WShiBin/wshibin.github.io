#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct object {
    int x;
    int y;
    int width;
    int height;
} object_t;

// 继承：通过使用组合实现
typedef struct img {
    struct object obj;
    char*         src;
} img_t;

img_t* img_new(int x, int y, int width, int height, char* src) {
    img_t* img      = malloc(sizeof(img_t));
    img->obj.x      = x;
    img->obj.y      = y;
    img->obj.width  = width;
    img->obj.height = height;
    img->src        = src;
    return img;
}

typedef struct label {
    struct object obj;
    char*         text;
} label_t;

int main(int argc, char* argv[]) {
    // 创建子类对象
    img_t* img = img_new(0, 0, 100, 200, "foo.png");

    // 子类对象转换为父类对象
    object_t* obj = (object_t*)img;

    // 访问父类对象的成员
    printf("obj width: %d\n", obj->width);
    printf("obj heith: %d\n", obj->height);
    return 0;
}