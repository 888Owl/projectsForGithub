function objToInt() {
    let obj = document.getElementById("integer-input").value
    let useObj = parseInt(Number(obj), 2);
    return document.getElementById("integer").innerHTML = useObj;
  }
    
  function intToSwitch() {
    let int = document.getElementById("binary-input").value
    let use = parseInt(Number(int), 10).toString(2).split("");
    return document.getElementById("binary").innerHTML = use.join('');
  }
  