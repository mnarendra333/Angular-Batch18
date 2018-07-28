function declareVar() {
    var a = 10;
    var b = 'hello';
    var c = true;
    var d = 1234;
    var e = [10, 20, 30, 40];
    console.log(a + " " + b + " " + c + " " + d);
    for (var i = 0; i < e.length; i++)
        console.log(e[i]);
}
declareVar();
