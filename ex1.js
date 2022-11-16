
let pattern = "";


function PrintPlus(n){
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      pattern += " ";
    }
    for (let k = 0; k < i; k++) {
      pattern += "+";
    }
    pattern += "\n";  
}
console.log(pattern);
}
    return PrintPlus(4);
  
