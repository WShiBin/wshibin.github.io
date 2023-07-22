#include <iostream>

using namespace std;

class Foo
{
private:
    /* data */
public:
    Foo(/* args */);
    void bar();
    ~Foo();
};

Foo::Foo(/* args */)
{
}
void Foo::bar(){
    cout << "Hello World" << endl;
}

Foo::~Foo()
{
}


int main(int argc, char* argv[]) {
    Foo* foo = new Foo();
    // Foo::bar(foo);

    return 0;
}