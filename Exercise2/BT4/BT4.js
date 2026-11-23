let arr1 = prompt('Nhập chuỗi ký tự thứ nhất').split('');
let arr2 = prompt('Nhập chuỗi ký tự thứ hai').split('');
// if (arr1.includes(arr2) || arr2.includes(arr1)) {
//     console.log('Hai chuỗi giống nhau');    
// } else {
//     console.log('Hai chuỗi không giống nhau');
    
// }
let isSame = true;
if (arr1.length !== arr2.length) {
    isSame = false;
    console.log('Hai chuỗi không giống nhau');
} else {
for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
        isSame = false;
        break;
    }
}
if (isSame) {
    console.log('Hai chuỗi giống nhau');
} else {
    console.log('Hai chuỗi không giống nhau');
}
}