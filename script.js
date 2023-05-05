
var generateBtn = document.querySelector("#generate");


function writePassword() {
    function generatePassword() {
        var passwordLength = prompt("Enter password length between 8 and 128 characters:");
        var length = parseInt(passwordLength)
        var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";  
       // added characters allowed to be used is passwords along with the permitted length allowed for the passwords. Also defined the gerneratePassword().
        if (isNaN(length) || length < 8 || length > 128) {
            alert("Password length must be a number between 8 and 128!");
            return "";
        }
       
        var lowercase = confirm("Do you want to include lowercase letters?");
        var uppercase = confirm("Do you want to include uppercase letters?");
        var numbers = confirm("Do you want to include numbers?");
        var symbols = confirm("Do you want to include symbols?");
        // Made the ability to allow the user to cutomize their randomly generated password with what characters they want.
        var charset = "";
        if (lowercase) {
          charset += "abcdefghijklmnopqrstuvwxyz";
        }
        if (uppercase) {
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (numbers) {
          charset += "0123456789";
        }
        if (symbols) {
          charset += "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
        }
        //function used to display options used for password cumstomization above.
        var password = "";
        for (var i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);

