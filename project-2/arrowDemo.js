function arrowTest() {
    var numbers = [10, 20, 30, 40, 50, 60, 70];
    var sum = 0;
    // numbers.forEach(function(no){
    //     sum+=no;
    // })
    // console.log(sum);
    numbers.forEach(function (element) { return sum = sum + element; });
    console.log(sum);
}
arrowTest();
