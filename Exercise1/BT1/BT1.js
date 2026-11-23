let arr = [];
let count = 0;
//nhập 10 số nguyên từ người dùng
for (let i = 0; i < 10; i++) {
    let input = +prompt(`Nhập số nguyên thứ ${i+1}`);
    arr.push(input);
};

//duyêt mảng, đếm các số >=10
for (let number of arr) {
    if (number >= 10) {
        count = count + 1;
    }
}
console.log('Mảng vừa nhập là: ',arr);
console.log(`Có ${count} số >= 10`);