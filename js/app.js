document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");

    let numbersForPassword = "1234567890";
    let lettersForPassword = "azertyuiopqsdfghjklmwxcvbn";
    let letterCapsForPassword = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    let specialCharactersForPassword = "²&é(-è_çà)=+°²£µ%¨^!:;,"

    let allCharacters = numbersForPassword+lettersForPassword+letterCapsForPassword+specialCharactersForPassword;


    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);

    let generateButton = document.querySelector("input[name='generate']");
    let cancelButton = document.querySelector("input[name='cancel']");
    let generatedPassword = document.querySelector("input[type='text']");
    let copyPasswordButton = document.querySelector("input[name='copy']");
    let passwordAttemps = 1;

    let latestPasswordGenerated = ["Test1", "Test2", "Test3"];

    console.log(latestPasswordGenerated);

    

    let app =({
        generatePassword() {

            passwordAttemps++;

            if (passwordAttemps > 1) {
                app.resetPassword();
            }

            for (let i = 0; i < 12; i++ ) {
                generatedPassword.value += numbersForPassword[randomNumber];
                generatedPassword.value += letterCapsForPassword[randomNumber];
                generatedPassword.value += lettersForPassword[randomNumber];
                generatedPassword.value += specialCharactersForPassword[randomNumber];
                generatedPassword.value += allCharacters[randomNumber];

                randomNumber = Math.floor(Math.random() * 10) + 1;
            }

        },

        resetPassword() {
            generatedPassword.value = "";
        },

        copyPassword() {
            generatedPassword !== "" ? 
            navigator.clipboard.writeText(generatedPassword.value) 
            : generatedPassword.value = "You need to generate a passwords first !";
        },
    })

    generateButton.addEventListener('click', app.generatePassword);

    cancelButton.addEventListener('click', app.resetPassword);

    copyPasswordButton.addEventListener('click', app.copyPassword);

});