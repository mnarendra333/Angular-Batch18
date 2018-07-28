function arrowTest(){

    let numbers : number[] = [10,20,30,40,50,60,70];
    let sum  = 0;
    // numbers.forEach(function(no){
    //     sum+=no;
    // })
    // console.log(sum);

    numbers.forEach(element => sum = sum+element);        
    console.log(sum);

}
arrowTest();