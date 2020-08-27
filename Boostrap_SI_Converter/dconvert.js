//at first hide the result section:
document.getElementById("result2").style.visibility="hidden";


//when you type (input event e) execute function(e):
document.getElementById("miles").addEventListener("input",function(e){
    document.getElementById("result2").style.visibility="visible";
    //target event property gets the element that triggered a specific event.
    //get the input event value:
    let milesinput=e.target.value;

    //convert to kilograms:
    document.getElementById("m").innerHTML=milesinput*1609.344;
    //convert to grams:
    document.getElementById("km").innerHTML=milesinput*1.609344;


});