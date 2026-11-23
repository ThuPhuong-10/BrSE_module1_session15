let arr = [];
//nhập 10 số nguyên từ người dùng
for (let i = 0; i < 10; i++) {
    let input = +prompt(`Nhập số nguyên thứ ${i+1}`);
    arr.push(input);
};

//nhập số bất kỳ, tìm xem có nằm trong mảng không
let input = +prompt('Nhập số cần kiểm tra');
if (arr.includes(input)) {
    console.log(`Number ${input} is in the array`);
} else {
    console.log(`Number ${input} is not in the array`);
}