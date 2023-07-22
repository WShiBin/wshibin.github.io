struct Foo {}

impl Foo {
    fn new() -> Self {
        Self {}
    }
    fn bar(&self) {
        println!("bar")
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let foo = Foo::new();
    foo.bar();

    Foo::bar(&foo);
    Ok(())
}
