let arr = prompt('Nhập các số nguyên bất kỳ').split(' ');
let max = Number(arr[0]);
let total = 0;
for (let i = 0; i < arr.length; i++) {
    if (max < Number(arr[i])) {
        max = Number(arr[i])
    }
    total = total + Number(arr[i]);
}
console.log(`Giá trị lớn nhất là: ${max}`);
console.log('Giá trị trung bình của các phần tử trong mảng = ',total / arr.length);

