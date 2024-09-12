# projetoAgenda
 
## CRUD de Agenda

Este é um projeto simples de CRUD para uma agenda, desenvolvido com **JavaScript** no front-end, **Node.js** no back-end e **MongoDB** como banco de dados.

## Funcionalidades

- **Create, Read, Update e Delete**: Os quatro elementos básicos do CRUD estão implementados e funcionando.
- **Validação de Dados**:
  - **Front-end**: Validações para fornecer feedback instantâneo, melhorando a experiência do usuário e reduzindo a carga no servidor.
  - **Back-end**: Validação adicional para garantir que os dados recebidos atendam aos critérios esperados e proteger o servidor contra dados maliciosos, considerando que a validação do front-end pode ser burlada.
  - **Banco de dados**: Validação para garantir a integridade dos dados e evitar inconsistências.
  - **Validações Específicas**:
    - **Senha**: Deve conter entre 3 e 50 caracteres.
    - **E-mail**: Deve ser um e-mail válido.

## Regras de Acesso

- A agenda pode ser visualizada por qualquer pessoa que possua o endereço.
- Apenas usuários cadastrados podem fazer alterações (inserir, editar ou remover registros).

## Tecnologias Utilizadas

- **Front-end**: JavaScript
- **Back-end**: Node.js
- **Banco de Dados**: MongoDB

## Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente conforme necessário (como a string de conexão com o MongoDB).
4. Inicie o servidor com `npm start`.

Sinta-se à vontade para explorar o código e contribuir!

+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=

## Agenda CRUD

This is a simple CRUD project for an agenda, developed with **JavaScript** on the front-end, **Node.js** on the back-end, and **MongoDB** as the database.

## Features

- **Create, Read, Update, and Delete**: The four basic CRUD operations are implemented and functional.
- **Data Validation**:
  - **Front-end**: Validations provide instant feedback, enhancing the user experience and reducing server load.
  - **Back-end**: Additional validation ensures that the received data meets expected criteria and protects the server from malicious inputs, considering front-end validation can be bypassed.
  - **Database**: Validation to ensure data integrity and avoid inconsistencies.
  - **Specific Validations**:
    - **Password**: Must be between 3 and 50 characters long.
    - **Email**: Must be a valid email address.

## Access Rules

- The agenda can be viewed by anyone with the link.
- Only registered users can make changes (insert, edit, or delete records).

## Technologies Used

- **Front-end**: JavaScript
- **Back-end**: Node.js
- **Database**: MongoDB

## How to Run the Project

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Configure environment variables as necessary (e.g., MongoDB connection string).
4. Start the server with `npm start`.

Feel free to explore the code and contribute!
