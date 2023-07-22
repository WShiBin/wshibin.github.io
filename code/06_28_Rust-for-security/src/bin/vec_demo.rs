fn main() {
    let mut vec = Vec::from([0, 2, 4, 6]);
    for (idx, ele) in vec.iter().enumerate() {
        if *ele == 2 {
            vec.remove(idx);
        }
    }
}
