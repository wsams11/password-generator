var specials = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var passwordChars = [];


document.getElementById("password-btn").addEventListener("click", function () {
    passwordGenerate();
});

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
        length: length,
        specialChars: specialChars,
        numericChars: numericChars,
        uppercaseChars: uppercaseChars,
        lowercaseChars: lowercaseChars,
    }

    return passwordOptions;

}

function getRandom(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

function passwordGenerate() {
    var options = getPasswordOptions();
    if (!options) return;

    var password = "";

    if (options.specialChars) {
        password += getRandom(specials);
    }

    if (options.numericChars) {
        password += getRandom(numbers);
    }

    if (options.uppercaseChars) {
        password += getRandom(uppercase);
    }

    if (options.lowercaseChars) {
        password += getRandom(lowercase);
    }

    for (var i = 0; i < options.length; i++) {
        if (options.specialChars) {
            password += getRandom(specials);
        }

        if (options.numericChars) {
            password += getRandom(numbers);
        }

        if (options.uppercaseChars) {
            password += getRandom(uppercase);
        }

        if (options.lowercaseChars) {
            password += getRandom(lowercase);
        }
    }
    
    
    document.getElementById("password").innerText = password.substring(0, options.length)
}
document.getElementById("password").addEventListener("onclick", function () {
    console.log("password"
    )
    // passwordOptions.select;
    // Document.execCommand("copy");
});
// getPasswordOptions();
