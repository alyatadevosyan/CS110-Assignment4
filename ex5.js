const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
function toHexadecimal(x) {
    let hex = "";
    while (x >= 16){
        let r = x % 16;
        hex += remainderHex(r);

        x = Math.floor(x / 16);
    }

    hex += remainderHex(x);

    hex = reverseText(hex); 
    console.log(hex);
    return hex;
}

function remainderHex(r) {
    if(r > 9) {
        return arr[r - 10];
    } 
    return r; 
}

function reverseText(text) {
    let index = text.length - 1;
    let result = '';
    while (index >= 0) {
        result += text[index];
        index--;
    }
    return result;
}
return toHexadecimal(20);

