function Factorial(num){
    if(num ===0 || num ===1){
        console.log(1);
    }
    for(let i = num - 1; i>=1;i--){
        num = num*i;
    }
    console.log(num);
}
return Factorial(6);