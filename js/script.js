function add() {
    // alert("it's a low Budget Calculator, the addition cant work");
    var a = prompt("Enter your Number ");
    var b = prompt("Enter your Number ");
    let result = Number(a) + Number(b);
    alert(`${a} + ${b} = ${result}`);
}
function sub() {
    var a = prompt("Enter your Number");
    var b = prompt("Enter your Number");
    let result = a - b;
    alert(`${a} - ${b} = ${result}`);
}
function div() {
    var a = prompt("Enter your Number");
    var b = prompt("Enter your Number");
    let result = a / b;
    alert(`${a} / ${b} = ${result}`);
}
function mult() {
    var a = prompt("Enter your Number");
    var b = prompt("Enter your Number");
    let result = a * b;
    alert(`${a} * ${b} = ${result}`);
}