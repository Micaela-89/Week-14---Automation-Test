const Page = require('./page');

class RegisterPage extends Page {


    //Login credentials selectors
    get username () { return $('#nameInput')}
    get email () { return $('#emailInput')}
    get password () { return $('#passwordInput')}
    get passwordConfirmation () { return $('#confirmPassInput')}
    //Button selectors
    get submitButton () { return $("#submitForm")}
    get resetButton () { return $(".resetBtn")}
    //Alert messages selectors
    get flashUserName () {return $('#errorMsgName')}
    get flashEmail () {return $('#errorMsgEmail')}
    get flashPassword () {return $('#errorMsgPassword')}
    get flashConfirmPass () {return $('#errorMsgConfirmPass')}
   //ValidationDiv selector
    get validationText () { return $('#validationsDiv')}
    //LoginForm Link selector
    get loginLink () { return $('a')}


    //Register Path
    open () {
        return super.open('register');
    }

    submit () {
        this.submitButton.click()


    }
}
module.exports = new RegisterPage();



