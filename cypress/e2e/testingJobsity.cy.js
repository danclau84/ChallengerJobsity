describe("Testing - AutomationPractice.com", () =>{
    beforeEach(() => {
        cy.visit("http://automationpractice.com") //visit the page
        cy.get('#contact-link > a').click() // click over link contact
      })
    it("Validate customer form",() =>{
        
        cy.get('#id_contact').select("Customer service") //Select option Customer service
        cy.get('#email').type("daniela.carrillo@outlook.com") //Input a email
        cy.get('#id_order').type("123456") //Input order number
        cy.fixture('logo.jpg').as('logo') //Set logo fixture
        cy.get('#fileUpload').selectFile("@logo") //upload a file
        cy.get('#message').type("Testing text automation") //imput message
        cy.get('#submitMessage > span').click() //submit a button send
        cy.get('.alert').should("have.text","Your message has been successfully sent to our team.") // expect a successful message
    })

    it("Validate webmaster form",() =>{
        
        cy.get('#id_contact').select("Webmaster") //Select option Webmaster service
        cy.get('#email').type("daniela.carrillo@outlook.com") //Input a email
        cy.get('#id_order').type("123456") //Input order number
        cy.fixture('logo.jpg').as('logo') //Set logo fixture
        cy.get('#fileUpload').selectFile("@logo") //upload a file
        cy.get('#message').type("Testing text automation") //imput message
        cy.get('#submitMessage > span').click() //submit a button send
        cy.get('.alert').should("have.text","Your message has been successfully sent to our team.") // expect a successful message
    })

    it("Validate empty form",() =>{
        cy.get('#submitMessage > span').click() //submit a button send
        //cy.get('ol > li').should("have.text","There is 1 error") // expect a successful message
        cy.contains('Invalid email address.')
        cy.get('#email').type("daniela.carrillo@outlook.com") //Input a email
        cy.get('#submitMessage > span').click() //submit a button send
        cy.contains('The message cannot be blank.')
        cy.get('#message').type("Testing text automation") //imput message
        cy.get('#submitMessage > span').click() //submit a button send
        cy.contains('Please select a subject from the list provided.')
        cy.get('#id_contact').select("Webmaster") //Select option Webmaster service
        cy.get('#submitMessage > span').click() //submit a button send
    })

})