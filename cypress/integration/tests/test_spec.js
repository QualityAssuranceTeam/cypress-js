describe("My First Test", () => {
  it("Visit localhost", () => {
    cy.visit("/");
  });
  before("setup Admin User", () => {
    const adminUser = {
      name: "Test Admin",
      email: "test.admin@test.com",
      password: "Test1234567890",
      blogTitle: "Test Site"
    };

    const body = { setup: [adminUser] };
    
    cy.request({
      method: "POST",
      url: "/ghost/api/v3/admin/authentication/setup/",
      body,
      failOnStatusCode: false
    });
  });
});
