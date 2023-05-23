#include <stdio.h>
#include <stdlib.h>
// #include <string.h>

// 继承：通过使用拓展实现
typedef struct object {
    int   x;
    int   y;
    int   width;
    int   height;
    void* sub_obj;
} object_t;

// 创建父类对象
object_t* object_new(int x, int y, int width, int height) {
    object_t* obj = malloc(sizeof(object_t));
    obj->x        = x;
    obj->y        = y;
    obj->width    = width;
    obj->height   = height;
    obj->sub_obj  = NULL;
    return obj;
}

typedef struct img {
    char* src;
} img_t;

// 创建子类对象
object_t* img_new(int x, int y, int width, int height) {
    object_t* obj = object_new(x, y, width, height);
    obj->sub_obj  = malloc(sizeof(img_t));
    return obj;
}

// 设置子类对象的成员
void img_set_src(object_t* obj, char* src) {
    img_t* img = (img_t*)obj->sub_obj;
    img->src   = src;
}

// 获取子类对象的成员
char* img_get_src(object_t* obj) {
    img_t* img = (img_t*)obj->sub_obj;
    return img->src;
}

int main(int argc, char* argv[]) {
    // 创建子类对象
    object_t* obj = img_new(0, 0, 100, 200);

    img_set_src(obj, "bar.png");

    printf("obj width: %d\n", obj->width);
    printf("obj heith: %d\n", obj->height);
    printf("img src: %s\n", img_get_src(obj));
    return 0;
}