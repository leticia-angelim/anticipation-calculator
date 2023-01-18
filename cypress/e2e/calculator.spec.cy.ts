context("Calculator", () => {
  it("Tries to access the application", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
  });

  it("Tries to calculate anticipation without specifying days", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
        mdr: 4,
      },
    });

    cy.get("input#amount").type("15000");
    cy.get("input#installments").type("3");
    cy.get("input#mdr").type("4");
    cy.get("button[type=submit]").click();

    cy.contains("R$ 13267,00");
    cy.contains("R$ 13536,00");
    cy.contains("R$ 13824,00");
    cy.contains("R$ 14400,00");
  });

  it("Tries to calculate anticipation specifying days", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
        mdr: 4,
        days: [30, 60, 90],
      },
    });

    cy.get("input#amount").type("15000");
    cy.get("input#installments").type("3");
    cy.get("input#mdr").type("4");
    cy.get("input#days").type("[30, 60, 90]");
    cy.get("button[type=submit]").click();

    cy.contains("R$ 13824,00");
    cy.contains("R$ 14208,00");
    cy.contains("R$ 14400,00");
  });

  it("Tries to calculate anticipation with amount value less then 1000", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 10,
        installments: 3,
        mdr: 4,
      },
    });

    cy.get("input#amount").type("10");
    cy.get("input#installments").type("3");
    cy.get("input#mdr").type("4");
    cy.get("button[type=submit]").click();

    cy.contains("Valor precisa ser maior ou igual a 1000");
  });

  it("Tries to calculate anticipation with installments value more then 12", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 20,
        mdr: 4,
      },
    });

    cy.get("input#amount").type("15000");
    cy.get("input#installments").type("20");
    cy.get("input#mdr").type("4");
    cy.get("button[type=submit]").click();

    cy.contains("Máximo de 12 parcelas");
  });

  it("Tries to calculate anticipation without amount value", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        installments: 3,
        mdr: 4,
      },
    });

    cy.get("input#installments").type("3");
    cy.get("input#mdr").type("4");
    cy.get("button[type=submit]").click();

    cy.contains("Campo obrigatório");
  });

  it("Tries to calculate anticipation without installments value", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        mdr: 4,
      },
    });

    cy.get("input#amount").type("15000");
    cy.get("input#mdr").type("4");
    cy.get("button[type=submit]").click();

    cy.contains("Campo obrigatório");
  });

  it("Tries to calculate anticipation without mdr value", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
      },
    });

    cy.get("input#amount").type("15000");
    cy.get("input#installments").type("3");
    cy.get("button[type=submit]").click();

    cy.contains("Campo obrigatório");
  });

  it("Tries to calculate anticipation without any value", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {},
    });

    cy.get("button[type=submit]").click();

    cy.contains("Campo obrigatório");
  });
});
