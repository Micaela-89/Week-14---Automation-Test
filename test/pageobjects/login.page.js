const Page = require('./page');

class LoginPage extends Page {

    //Login credentials selectors
    get username () { return $('#emailInput')}
    get password () { return $('#passwordInput')}
    //Button selectors
    get submitBtn () { return $('#submitForm')}
    get resetBtn () { return $('.resetBtn')}
    //Alert messages selectors
    get flashPassword () { return $('#errorMsgPassword')}
    get flashEmail () { return $('#errorMsgEmail')}
    //ValidationDiv selector
    get validationText () { return $('#validationsDiv')}
    //Register Form Link selector
    get regLink () { return $('a')}


    //Login Path

    open () {
        return super.open('login');
    }

    submit () {
        this.submitBtn.click()
    }
}
module.exports = new LoginPage();
