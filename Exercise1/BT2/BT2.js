let arr = [];
let isDuplicate = false;
//nhập 10 số nguyên từ người dùng
while (arr.length < 10) {
    let input = +prompt(`Nhập số nguyên thứ ${arr.length + 1}`);
    if (arr.includes(input)) {
        isDuplicate = true;
        alert('đã bị trùng số, mời nhập lại');
    } else {
        arr.push(input);
    }
}
console.log('Mảng vừa nhập là: ',arr);

//tìm số lớn nhất trong dãy
let max = arr[0];
let index = 0;
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
        index = i;
    }
}
console.log(`Số có giá trị lớn nhất là: ${max} ở vị trí ${index + 1}`);

