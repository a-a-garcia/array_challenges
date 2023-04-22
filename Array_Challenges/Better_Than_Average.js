function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum += arr[i];
    }
    let average = (sum/arr.length);
    var count = 0
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > average) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9, 10]);
console.log(result); // we expect back 4
