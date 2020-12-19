describe("Tickets", () => {
	beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

	it("fill all the text input fields", () =>{
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
});