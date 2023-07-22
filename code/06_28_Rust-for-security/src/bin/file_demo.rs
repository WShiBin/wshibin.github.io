use std::{
    fs::File,
    io::{Error, Write},
};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let file: Result<File, Error> = File::open("foo.txt");
    match file {
        Ok(mut file) => match file.write(b"foo") {
            Ok(len) => println!("Wrote {} bytes", len),
            Err(err) => println!("Failed to write to file, error msg: {:?}", err),
        },
        Err(err) => println!("Failed to open, error msg: {:?}", err),
    }
    Ok(())
}
