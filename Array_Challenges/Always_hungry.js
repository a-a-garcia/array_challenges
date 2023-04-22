function alwaysHungry(arr) {
    let foodCounter = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == "food") {
            foodCounter += 1;
            console.log("yummy")
        } 
    }

    if (foodCounter == 0) {
        console.log("I'm hungry")
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
