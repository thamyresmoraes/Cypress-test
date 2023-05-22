import { qase } from 'cypress-qase-reporter/dist/mocha';

describe("Tickets", () => {
	beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

	it.skip("fill all the text input fields", () =>{
		const firstName = "Thamyres"
		const lastName = "Moraes";

		cy.get("#first-name").type(firstName);
		cy.get("#last-name").type(lastName);
		cy.get("#email").type("thamyresmoraes@live.com");
		cy.get("#requests").type("QA");
		cy.get("#signature").type(`${firstName} ${lastName}`);


	});

	it("select two tickets", () =>{
		cy.get("#ticket-quantity").select("2")

	});

	it("select 'vip' ticket type", () =>{
		cy.get("#vip").check();

	});

	it("selects 'social media' checkbox", () =>{
		cy.get('#social-media').check();

	});


	 it("selects 'friend' and 'publication' then uncheck 'friend'", () =>{
		cy.get('#friend').check();
		cy.get('#publication').check();
		cy.get('#friend').uncheck();

	});


	 it("has 'TICKETBOX' headr's heading", () => {
		cy.get("header h1").should("contain", "TICKETBOX");

	});

	it("alerts on invalid email", () => {
		cy.get("#email").type("emailInvalido.com");

		cy.get("#email.invalid").should("exist");
	});

	 it("alias", () => {
		cy.get("#email")
		.as("email")
		.type("emailInvalido.com");

		cy.get("#email.invalid").should("exist");

		cy.get("@email") //chamando o alias que digita um email
			.clear() //limpando o campo
			.type("thamyres@email.com") //digitando um email valido

		cy.get("#email.invalid").should("not.exist");

	});

	it("fiils and reset the form", () =>{
		const firstName = "Thamyres"
		const lastName = "Moraes";
		const fullName = `${firstName} ${lastName}`

		cy.get("#first-name").type(firstName);
		cy.get("#last-name").type(lastName);
		cy.get("#email").type("thamyresmoraes@live.com");
		cy.get("#ticket-quantity").select("2")
		cy.get("#vip").check();
		cy.get('#friend').check();
		cy.get("#requests").type("e2e");

		cy.get(".agreement p").should(
			"contain",
			`I, ${fullName}, wish to buy 2 VIP tickets.`

		);

		cy.get("#agree").click()
		cy.get("#signature").type(fullName);

		cy.get("button[type='submit']")
		.as("submitButton")
		.should("not.be.disabled");

		cy.get("button[type='reset']").click();

		cy.get("@submitButton").should("be.disabled");

	});

	 it("fills mandatory fields using support command", () =>{
		const customer = {
			firstName: "Teste",
			lastName: "Silva",
			email: "testesilva@email.com"
		}

		cy.fillMandatoryFields(customer);

		cy.get("button[type='submit']")
		.as("submitButton")
		.should("not.be.disabled");

		cy.get("#agree").uncheck();

		cy.get("@submitButton").should("be.disabled");
	});
});