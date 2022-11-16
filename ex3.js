// 40 = 2*16 + 8 //
// 16 = 2*8 

function Gcd(x, y) {
    while (y>0){
        let t = y;
        y = x % y;
        x = t;
    }

    console.log(x);
}
return Gcd(16, 40);