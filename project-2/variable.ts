function declareVar(){
    let a : number = 10;
    let b : string = 'hello';
    let c : boolean = true;
    let d : any = 1234;
    let e : number[] = [10,20,30,40];
    console.log(a+" "+b+" "+c+" "+d);

    for(var i=0;i<e.length;i++)
        console.log(e[i]);
}

declareVar();