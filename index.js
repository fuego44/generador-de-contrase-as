const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let contraseña1El = document.getElementById("contraseña1");
let contraseña2El = document.getElementById("contraseña2");

function meterContraseña() {
    function r () {
       return Math.floor(Math.random()* characters.length);
    }
    
    let m = ""
    let n = ""
    for(let i = 0; i < 15; i++) {
        m += characters[r()]
        n += characters[r()]
        
    }
    contraseña1El.textContent = m
     contraseña2El.textContent = n
}



