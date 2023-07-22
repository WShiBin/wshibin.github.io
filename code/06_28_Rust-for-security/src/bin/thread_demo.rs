use std::thread;

fn main() {
    let foo = Vec::from([0, 2, 4, 6]);
    thread::spawn(move || {
        println!("foo: {:?}", foo);
    });

    thread::spawn(move || {
        println!("foo: {:?}", foo);
    });
}
