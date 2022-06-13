describe("Testing - AutomationPractice.com", () =>{
    it("Validate Customer Form",() =>{
        cy.visit("http://automationpractice.com") //visit the page
        cy.get('#contact-link > a').click() // click over link contact
        cy.get('#id_contact').select("Customer service") //Select option Costumer service
        cy.get('#email').type("daniela.carrillo@outlook.com") //Input a email
        cy.get('#id_order').type("123456") //Input order number
        cy.fixture('logo.jpg').as('logo') //Set logo fixture
        cy.get('#fileUpload').selectFile("@logo") //upload a file
        cy.get('#message').type("Testing text automation") //imput message
        cy.get('#submitMessage > span').click() //submit a button send
        cy.get('.alert').should("have.text","Your message has been successfully sent to our team.") // expect a successful message
    })

    it("Validate Webmaster Form",() =>{
        cy.visit("http://automationpractice.com") //visit the page
        cy.get('#contact-link > a').click() // click over link contact
        cy.get('#id_contact').select("Webmaster") //Select option Webmaster service
        cy.get('#email').type("daniela.carrillo@outlook.com") //Input a email
        cy.get('#id_order').type("123456") //Input order number
        cy.fixture('logo.jpg').as('logo') //Set logo fixture
        cy.get('#fileUpload').selectFile("@logo") //upload a file
        cy.get('#message').type("Testing text automation") //imput message
        cy.get('#submitMessage > span').click() //submit a button send
        cy.get('.alert').should("have.text","Your message has been successfully sent to our team.") // expect a successful message
    })


})