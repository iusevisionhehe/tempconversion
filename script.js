let temp = document.getElementById("temp");
let F = document.getElementById("F");
let C = document.getElementById("C");
let result = document.getElementById("result")

function convert(){
    
    if(F.checked){
       let tempa = temp.value * 9 / 5 + 32;
        result.textContent= tempa.toFixed(2) + "F"
        
    }
    else if(C.checked){  
       let tempa = (temp.value -32) * (5/9)
         result.textContent= tempa.toFixed(2) + "C"
    } else{
        result.textContent=("select a unit nigga")
    }

    
}