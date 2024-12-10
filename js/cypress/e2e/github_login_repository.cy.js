describe('GitHub Create Repository Test', () => {
  const githubUrl = 'https://github.com';
  const username = Cypress.env('GITHUB_USERNAME'); // Defina no arquivo de configuração
  const password = Cypress.env('GITHUB_PASSWORD'); // Defina no arquivo de configuração
  const repositoryName = `test-repo-${Date.now()}`; // Nome único para o repositório

  it('Logs into GitHub and creates a new repository', () => {
    // Acessar a página inicial do GitHub
    cy.visit(githubUrl);

    // Clicar no botão de login
    cy.contains('Sign in').click();

    // Preencher as credenciais de login
    cy.get('#login_field').type(username);
    cy.get('#password').type(password);
    cy.get('input[type="submit"]').click();

    // Verificar se o login foi bem-sucedido
    cy.contains('dashboard', { matchCase: false }).should('exist');

    // Acessar a página de criação de repositório
    cy.contains('New').click();

    // Preencher o formulário para criar um novo repositório
    cy.get('input[type="text"][data-testid="repository-name-input"]').type(repositoryName);

    cy.wait(3000);

    cy.contains('Create repository').click();

    // Verificar se o repositório foi criado
    cy.contains(repositoryName).should('exist');

    // Sucesso alcançado, teste termina aqui
  });
});
