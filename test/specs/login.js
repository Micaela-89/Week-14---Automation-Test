const LoginPage = require('../pageobjects/login.page');

describe('Login Form Title', () => {
    it('Verify page Title is correct', () => {
        LoginPage.open()
        browser.pause(3000)
        expect(browser).toHaveTitle('Log In')
    })
})

describe('Login Form buttons', () => {
    it('All buttons in the form are enabled', () => {
        LoginPage.open()
        browser.pause(3000)
        expect(LoginPage.submitBtn).toExist;
        expect(LoginPage.submitBtn).toBeClickable;
        expect(LoginPage.resetBtn).toExist;
        expect(LoginPage.resetBtn).toBeClickable;
    })
})

describe ('Login form credentials verifications', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('Should deny access with valid email and wrong password', () => {
        LoginPage.username.setValue('validemail@gmail.com')
        LoginPage.password.setValue('123456')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.flashPassword).toHaveText('Your password can only contain letters and numbers and must be at least 8 characters long.')
    })

    it('Should deny access with invalid email and wrong password', () => {
        LoginPage.username.setValue('micaela.com')
        LoginPage.password.setValue('123456')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.flashEmail).toHaveText('The email address is invalid')
        expect(LoginPage.flashPassword).toHaveText('Your password can only contain letters and numbers and must be at least 8 characters long.')
    })

    it('should allow access with correct credentials', () => {
        LoginPage.username.setValue('validemail@gmail.com')
        LoginPage.password.setValue('asdasd123')
        LoginPage.submit()
        browser.pause(5000);

        expect(LoginPage.validationText).toBeDisplayed('Your login data is: validemail@gmail.com asdasd123')
    })
})

describe('Reseting all inputs', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open()
    })
    it('Reset button should clear all inputs', () => {
        LoginPage.username.setValue('validemail@gmail.com')
        LoginPage.password.setValue('asdasd123')
        LoginPage.resetBtn.click()
        browser.pause(5000);

        expect(browser).toBeCleared
        expect(LoginPage.username).not.toHaveText()
        expect(LoginPage.password).not.toHaveText()
    })
})

describe('Redirecting user to Register Form', () => {
    it('Clicking on "Don´t have an account? Register here!" should redirect to the Register Form', () => {
        LoginPage.open()
        LoginPage.regLink.click()
        browser.pause(5000);

        expect(LoginPage.regLink).toBeClickable()
        expect(browser).toHaveUrl('http://localhost:4000/register.html')
    })
})
