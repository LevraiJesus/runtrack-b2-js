function myNearZero(array) {
    let closest = array[0];

    for (let i = 1; i < array.length; i++) {

        if (Math.abs(array[i]) < Math.abs(closest) || 
            (Math.abs(array[i]) === Math.abs(closest) && array[i] > closest)) {
            closest = array[i];
        }
    }
    return closest;
}
console.log(myNearZero([3, 8, 4, 2, 5]));
console.log(myNearZero([-1, -4, 2, 5, 6, 9]));
