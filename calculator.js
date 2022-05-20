function calculation(){
    let num1=Number(prompt(" Enter the num1:"));
    let num2=Number(prompt(" Enter the num2:"));
    document.getElementById("results").innerHTML=`
    <p>${num1} + ${num2} = ${sum(num1,num2)}</p>
    <p>${num1} - ${num2} = ${subs(num1,num2)}</p>
    <p>${num1} x ${num2} = ${multiply(num1,num2)}</p>
    <p>${num1} / ${num2} = ${division(num1,num2)}</p>`;
}
function sum(a,b){
    return a+b;
}
function subs(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}