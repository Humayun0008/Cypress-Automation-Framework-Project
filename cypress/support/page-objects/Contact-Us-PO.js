/// <reference types="cypress" />

class Contact_Us_PO {
    type_FirstName(firstname){
        cy.get('[name="first_name"]').type(firstname);
    }
    type_LastName(lastname){
        cy.get('[name="last_name"]').type(lastname);
    }
    type_EmailAddress(email){
        cy.get('[name="email"]').type(email)
    }
    type_Comment(message){
        cy.get('textarea[name="message"]').type(message);
    }
    clickOn_Submit_Button(){
        cy.get('[type="submit"]').click();
    }
    validate_Submission_Header(ValidateText){
        cy.xpath("//h1 | //body").contains(ValidateText);
    }
}
export default Contact_Us_PO;