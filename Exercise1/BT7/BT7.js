let arr = [];
//nhập 10 số nguyên từ người dùng
for (let i = 0; i < 10; i++) {
    let input = +prompt(`Nhập số nguyên thứ ${i+1}`);
    arr.push(input);
};

arr.sort((a, b) => b - a);
console.log('Mảng sau khi sắp xếp theo thứ tự giảm dần là: ',arr);
