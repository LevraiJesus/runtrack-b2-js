function mySquareArray(array) {
    return array.map(function(num){
        return num * num;
    });
}
console.log(mySquareArray([3, 8, 4, 2, 51]));