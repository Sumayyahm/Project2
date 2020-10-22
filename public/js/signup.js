$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.signup");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
      
      $.post("api/signup", userData)
      .then(function(data){

        alert("User has been created. Only one user can currently exist in the system - please use the login credentials you provided to log into the existing account in the future.")
      })
      .fail(function(err){
        alert("A User already exists in the system. Please use the existing login credentials to log into the account.")
      })
    
    emailInput.val("");
    passwordInput.val("");
  });
});