# Testes-EndToEnd
Repositório para a aula sobre Testes End-To-End da disciplina de Teste de Software

## Prática

### Linguagem JS

Foi utilizado a ferramenta Cypress com a seguinte estrutura de pastas:

```bash
├── js/
│ ├── cypress/
│ │ ├── e2e/
│ │ │ ├── github_login_repository.cy.js
│ │ ├── support/
| │ │ ├── e2e.js
│ │ ├── cypress.config.js
│ │ ├── instruções.txt
```

Siga `instruções.txt` para instalar a dependência Cypress dentro da pasta `js`.

#### Como rodar os testes?

Entre na pasta `js` e:
* Use o comando `npx cypress open` para testar a partir da GUI do Cypress;
* Use o comando `npx cypress run` para testar direto no CMD.

Acesse a [documentação do Cypress](https://docs.cypress.io/app/get-started/why-cypress)

### Linguagem Python

Foi utilizado a ferramenta Selenium com a seguinte estrutura de pastas:

```bash
├── python/
│ ├── requirements.txt
│ ├── test_chrome_selenium.py
│ ├── test_edge_selenium.py
```

Instale as dependências a partir do `requirements.txt` usando o comando `pip install -r requirements.txt` dentro da pasta `python`.

#### Como rodar os testes?

Entre na pasta `python` e:
* Use o comando `python test_chrome_selenium.py` para rodar o teste no Chrome;
* Use o comando `python test_edge_selenium.py` para rodar o teste no Edge.

Acesse a [documentação do Selenium + Python](https://selenium-python.readthedocs.io/) 

# Quiz para reforçar o que aprendemos na aula

Acesse o quiz [clicando aqui](https://www.menti.com/) e coloque o código que vai aparecer no projetor.
