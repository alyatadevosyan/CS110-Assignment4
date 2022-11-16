function Gcd(x,y) {
    while (y>0){
        let t = y;
        y = x % y;
        x = t;
    }
    return x; 
}
function Lcm(x,y){
    let Gcd1 = Gcd(x,y);
    let lcm = (x * y) / Gcd1;
    console.log(lcm)
}
return Lcm(8, 64);

