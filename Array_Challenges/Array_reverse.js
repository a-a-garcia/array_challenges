function reverse(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//1 A -> E [E, D, C, D, E]

//2 B -> D [E, D, C, D, E]

//3 C -> C [E, D, C, D, E]

//4 D -> D [E, D, C, B, A]