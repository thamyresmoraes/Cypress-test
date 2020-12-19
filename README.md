# Cypress-test

**1. Instalar o node e npm**

```sh
 sudo apt update
 sudo apt install nodejs
 sudo apt install npm
```

**2. Inicialize o projeto npm no diretório**

```sh
 npm init
```

**3. Instale o cypress**

```sh
 npm install cypress --dev
```

**4. Teste a instalação e crie uma estrutura básica do cypres no seu diretório:**

```sh
 npx cypress open
 ```



**Primeiros passos:**

Após a criação da estrutura básica do Cypress e a execução do `npx cypress open`, uma aplicação chamada electron será executada e terá vários exemplos de testes. Como não vamos usá-los, então vamos exclui-los! Os arquivos que devem ser excluídos estão dentro da pasta `integration`, apague todas as specs desta pasta. 



**Exemplos:**

- [COMO ACESSAR UMA PÁGINA](https://github.com/thamyresmoraes/Cypress-test/blob/master/cypress/integration/tickets.spec.js#L2)

- [DIGITANDO EM CAMPOS DE TEXTO](https://github.com/thamyresmoraes/Cypress-test/blob/master/cypress/integration/tickets.spec.js#L8-L13)
	
	**Comandos:**

 	* Identifica elementos através de selector css - `cy.get()`

	* Digita no campo - `type`

	* Para executar somente um teste - `it.only()`