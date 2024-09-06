function myArraySort(array, sorting){
    if (sorting === "ASC") {
        return array.sort(function(a,b){
            return a-b;
        });
    } else if (sorting === "DESC") {
        return array.sort(function(a, b) {
            return b-a
        });
    } else {
        return array;
    }
}

console.log(myArraySort([3, 8, 4, 2, 5], "ASC"));
console.log(myArraySort([-1, -4, 2, 5, 6, 9], "DESC"));