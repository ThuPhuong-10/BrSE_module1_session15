let arr = prompt('nhập 1 dãy ký tự').split('');
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        count++;
    }
}
console.log(`Có ${count} ký tự số trong dãy`);

