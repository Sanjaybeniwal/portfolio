const showLogo = document.getElementById("logoshow");
const logoTitle = "sanjay";

let newLogo = '';

for (let i = 0; i < logoTitle.length; i++) {
    const letter = logoTitle[i];
    
    if (letter === "s" || letter === "y") {
        // console.log(letter);
        newLogo += `<span style="font-size:24px;">${letter}</span>`;
    } else {
        // console.log('not s or y', letter);
        
        newLogo += letter;
    }
}

showLogo.innerHTML = newLogo;