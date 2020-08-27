//at first hide the result section:
document.getElementById("result3").style.visibility="hidden";


//when you type (input event e) execute function(e):
document.getElementById("celsius").addEventListener("input",function(e){
    document.getElementById("result3").style.visibility="visible";
    //target event property gets the element that triggered a specific event.
    //get the input event value:
    let cinput=e.target.value;

    //convert to K: (!!!!  Number())
    document.getElementById("kelvin").innerHTML= (Number(cinput) + 273.15);
  

});