const RegisterPage = require('../pageobjects/register.page');

describe('Register Form Title', () => {
    it('Verify page Title is correct', () => {
        RegisterPage.open()
        browser.pause(3000)
        expect(browser).toHaveTitle('Register')
    })
})

describe('Register Form buttons', () => {
    it('All buttons in the form are enabled', () => {
        RegisterPage.open()
        browser.pause(3000)
        expect(RegisterPage.submitBtn).toExist;
        expect(RegisterPage.submitBtn).toBeClickable;
        expect(RegisterPage.resetBtn).toExist;
        expect(RegisterPage.resetBtn).toBeClickable;
    })
})

describe ('Register form credentials verifications', () => {
    beforeAll('Open browser', () =>{
		RegisterPage.open();
    })
    it('Should deny access when username is not valid', () => {
        RegisterPage.username.setValue('Micaela89')
        RegisterPage.email.setValue('validemail@gmail.com')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.passwordConfirmation.setValue('asdasd123')
        RegisterPage.submit()
        browser.pause(5000);

        expect(RegisterPage.flashUserName).toHaveText('Your name must contain at least 6 characters and a space between First name and Last name.')
        expect(RegisterPage.validationText).toBeDisplayed('Registration process failed. Please check your data and try again')
    })
    it('Should deny access when email is not valid', () => {
        RegisterPage.username.setValue('Micaela Casais')
        RegisterPage.email.setValue('wrongemail@com')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.passwordConfirmation.setValue('asdasd123')
        RegisterPage.submit()
        browser.pause(5000);

        expect(RegisterPage.flashEmail).toHaveText('The email is not valid.')
        expect(RegisterPage.validationText).toBeDisplayed('Registration process failed. Please check your data and try again')
    })

    it('Should deny access with valid username and email but wrong password', () => {
        RegisterPage.username.setValue('Micaela Casais')
        RegisterPage.email.setValue('validemail@gmail.com')
        RegisterPage.password.setValue('12345')
        RegisterPage.passwordConfirmation.setValue('12345')
        RegisterPage.submit()
        browser.pause(5000);

        expect(RegisterPage.flashPassword).toHaveText('Your password must be at least 8 characters long and contain letters and numbers.')
        expect(RegisterPage.validationText).toBeDisplayed('Registration process failed. Please check your data and try again')
    })

    it('Should display error message when Confirmpassword is not the same as password', () => {
        RegisterPage.username.setValue('Micaela Casais')
        RegisterPage.email.setValue('validemail@gmail.com')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.passwordConfirmation.setValue('asdasd456')
        RegisterPage.submit()
        browser.pause(5000);

        expect(RegisterPage.flashConfirmPass).toHaveText('Passwords do not match.')
    })

    it('Should allow registration with correct credentials', () => {
        RegisterPage.username.setValue('Micaela Casais')
        RegisterPage.email.setValue('validemail@gmail.com')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.passwordConfirmation.setValue('asdasd123')
        RegisterPage.submit()
        browser.pause(5000);

        expect(RegisterPage.validationText).toBeDisplayed('Registration process successful. Your user data is: Micaela Casais casais_micaela@hotmail.com asdasd123')
    })
})
    describe('Reseting all inputs', () => {
        beforeAll('Open browser', () =>{
            RegisterPage.open()
        })
    it('Reset button should clear all inputs', () => {
        RegisterPage.username.setValue('Micaela Casais')
        RegisterPage.email.setValue('validemail@gmail.com')
        RegisterPage.password.setValue('asdasd123')
        RegisterPage.passwordConfirmation.setValue('asdasd123')
        RegisterPage.resetButton.click()
        browser.pause(5000);

        expect(browser).toBeCleared
        expect(RegisterPage.username).not.toHaveText()
        expect(RegisterPage.email).not.toHaveText()
        expect(RegisterPage.password).not.toHaveText()
        expect(RegisterPage.passwordConfirmation).not.toHaveText()
    })
})
    describe('Redirecting user to Login Form', () => {
    it('Clicking on "Already have an account? Login here!" should redirect to the Login Form', () => {
        RegisterPage.open()
        RegisterPage.loginLink.click()
        browser.pause(5000);

        expect(RegisterPage.loginLink).toBeClickable()
        expect(browser).toHaveUrl('http://localhost:4000/login.html')
    })
})