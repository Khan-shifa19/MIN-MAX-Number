function find(){
    event.preventDefault();
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let msg = document.getElementById("msg");

    let n1 = parseFloat(num1.value);
    let n2 = parseFloat(num2.value);
    let result = Math.max(n1,n2);
    msg.innerHTML = "Max Number is : "+ result;

}