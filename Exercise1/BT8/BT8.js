let arrayA = [];
let arrayB = [];
for (let i = 0; i < 10; i++) {
    arrayA.push(+prompt(`Nhập số nguyên thứ ${i+1} của mảng A`));
}
for (let i = 0; i < 10; i++) {
    arrayB.push(+prompt(`Nhập số nguyên thứ ${i+1} của mảng B`));
}
let arrayC = arrayB.concat(arrayA);
console.log('Mảng C: ',arrayC);

