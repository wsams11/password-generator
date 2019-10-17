var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var passwordChars = [];


document.getElementById("password-btn").addEventListener("click", function () {
    getPasswordOptions();
})
function getPasswordOptions(passwordOptions) {
    var length = parseInt
    (prompt("how many characters would you like your password to contain?"))
    if (isNaN(length)) {
        alert("password length must be a number");
        return;
    }
    if (length < 8) {
        alert("password length must be greater than 8");
        return;
    }
    if (length > 128) {
        alert("password length must be less than 128");
        return;
    }
    var specialChars = confirm("would you like to use special characters?");
    
    var numericChars = confirm("would you like to use numeric characters?");
    
    var uppercaseChars = confirm("would you like to use Uppercase characters?");
    
    var lowercaseChars = confirm("would you like to use lowercase characters?");
    
    if (!specialChars && !numericChars && !uppercaseChars && !lowercaseChars) {
        alert("We can't help you, you are too picky");
        return;
    }
   var passwordOptions = {
        specialChars: specialChars,
        numericChars: numericChars,
        uppercaseChars: uppercaseChars,
        lowercaseChars: lowercaseChars,
    }
    
    
    console.log(passwordOptions);
    return passwordOptions;
    
    
}

function passwordGenerate() {
    console.log(passwordOptions);
}
passwordGenerate()
// getPasswordOptions();
