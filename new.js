const charactersOne =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`"
,"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const charactersNoNumbers =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`"
,"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

const charactersNoSymbols =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let gene = document.getElementById("generate-el")
let gene2 = document.getElementById("generate-el2")
let generateBtn = document.getElementById("generate-btn")

let lengthNeeded= 15

function generateRandomIndex(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]

    }        

generateBtn.addEventListener("click", function(evt) {
    let space1 = ""
    let space2 = ""

    if (evt.detail === 1) {
        for (let index = 0; index < lengthNeeded; index++) {
            space1 += generateRandomIndex(charactersOne)
            gene.textContent = space1   
        }   
    }

    else if (evt.detail === 2) {
        for (let index = 0; index < lengthNeeded; index++) {
            space1 += generateRandomIndex(charactersNoNumbers)
            gene.textContent = space1   
        }   
    }

    else if (evt.detail === 3) {
        for (let index = 0; index < lengthNeeded; index++) {
            space1 += generateRandomIndex(charactersNoSymbols)
            gene.textContent = space1   
        }   
    }

    else {
        space1
    }

    
    if (evt.detail === 1) {
        for (let index = 0; index < lengthNeeded; index++) {
            space2 += generateRandomIndex(charactersOne)
            gene2.textContent = space2   
        }   
    }

    else if (evt.detail === 2) {
        for (let index = 0; index < lengthNeeded; index++) {
            space2 += generateRandomIndex(charactersNoNumbers)
            gene2.textContent = space2   
        }   
    }

    else if (evt.detail === 3) {
        for (let index = 0; index < lengthNeeded; index++) {
            space2 += generateRandomIndex(charactersNoSymbols)
            gene2.textContent = space2   
        }   
    }

    else {
        space2
    }


})

gene.addEventListener("click", function() {
    copyToClipboard()
})



var copyTextareaBtn = document.getElementById('generate-el');

copyTextareaBtn.addEventListener('click', function(event) {
    copyTextareaBtn.focus();
    copyTextareaBtn.select();

    try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    } catch (err) {
    console.log('Oops, unable to copy');
    }
});