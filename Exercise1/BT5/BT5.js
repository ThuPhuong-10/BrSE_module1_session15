let arr = prompt('nhập các số bất kỳ').split(' ');
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 0) {
        count += 1;
    }
}
console.log(arr);
console.log('Số nguyên âm có trong chuỗi là: ',count);
