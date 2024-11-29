function generatePassword(){
    const length=document.getElementById("length").value;
    const useSymbols=document.getElementById("symbols").checked;

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    let characters=letters+numbers;

    if(useSymbols){
        characters+=symbols;
    }

    let password="";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;

    
}