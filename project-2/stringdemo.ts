function strDemo(){

        let firstName:any;
        firstName = 'venkat';
        if((<string>firstName).endsWith('at'))
            console.log(true);
        else
            console.log(false);


}

strDemo();
