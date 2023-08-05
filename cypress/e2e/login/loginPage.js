const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'Sign in'

class loginPage {
     
    static visit(){
        cy.visit(URL)
    }

    static fillUsername (username){
        cy.get(USERNAME).clear().type(username)
    }

    static fillPassword (password){
        cy.get(PASSWORD).clear().type(password)
    }

    static sign_in(){
        cy.contains(SIGN_IN)
    }
}

export default loginPage