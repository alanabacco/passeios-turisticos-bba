# Passeios turísticos em Borborema

## Sobre o projeto

Passeios turísticos em Borborema é um sistema web criado para centralizar todas as informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações.

Sistema web feito para a disciplina do Projeto Integrador dos cursos de Computação da UNIVESP, trabalho feito em grupo.

Para acessar a página online do projeto, entre em [passeiosturisticosbba.vercel.app](https://passeiosturisticosbba.vercel.app/)

### Funcionalidades

- Página Inicial com informações sobre a cidade e links que levam à outras páginas;
- Links que levam ao site oficial do município;
- Páginas com as informações cadastradas sobre Eventos, Atrações Turisticas, Guias Turísticos, Restaurantes, Hospedagens e Outras Informações;
- Página de Login para autenticação do usuário administrativo;
- Página principal de gerenciamento do Painel Administrativo;
- Páginas dedicadas para cadastrar, editar e excluir informações.
- Formulários com validação de campos obrigatórios;
- Campos de data com validação para garantir que a data de fim seja posterior ou igual à data de início;
- Máscara no campo de telefone para garantir o formato correto;
- Calendário de Eventos na Página de Eventos utilizando a biblioteca [React Big Calendar](https://www.npmjs.com/package//react-big-calendar) contendo os eventos cadastrados e feriados nacionais usando a API da [BrasilApi](https://brasilapi.com.br/docs#tag/Feriados-Nacionais)

## Ferramentas e tecnologias utilizadas

Neste repositório se encontram os diretórios

- [server](https://github.com/alanabacco/passeios-turisticos-bba/tree/main/server), que contém o backend da aplicação;
- [web](https://github.com/alanabacco/passeios-turisticos-bba/tree/main/web), contendo o frontend.

### Backend

- [NodeJS](https://nodejs.org/) - ambiente de execução JavaScript
- [Express](https://expressjs.com/) - framework para Node.js
- [Sequelize](https://sequelize.org/) - ORM (Object-Relational Mapper) para Node.js
- [Postgresql](https://www.postgresql.org/) - ferramenta de sistema de gerenciamento de bancos de dados
- [Swagger](https://swagger.io/) - cria documentação e facilita o desenvolvimento de APIs

### Frontend

- [React](https://react.dev/) - biblioteca de código aberto para interfaces gráficas
- [NextJS](https://nextjs.org/) - framework para React
- [TypeScript](https://www.typescriptlang.org/) - superset de javascript que adiciona recursos à linguagem

## Como executar o projeto localmente

Para executar o projeto de maneira local, primeiro você precisa ter o [NodeJS](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados na sua máquina. O banco de dados utilizado neste projeto é o [postgresql](https://www.postgresql.org/), também é bom ter ele instalado na máquina.

Em seguida, execute os seguintes comandos, um de cada vez em um terminal:

```bash
git clone https://github.com/alanabacco/passeios-turisticos-bba # clona o repositório
cd passeios-turisticos-bba # entra na pasta do projeto
```

### Para rodar o backend:

```bash
cd server # entra na pasta server
npm install # instala dependencias

# fazer a conexão com o banco de dados para continuar

npm run db:reset # para criar o banco de dados, tabelas e popular com dados de teste
npm run dev # roda o projeto
```

o backend estará rodando na porta 8080.

**Obs.**: é preciso fazer a **conexão com o banco de dados** e colocar as variáveis ambiente em um arquivo .env na pasta server. Exemplo de variáveis ambiente está no arquivo .env.exemplo, coloque a senha do banco de dados da sua máquina em `DEV_DB_PASSWORD=''`. A variável `HASH_SECRET` pode ser encontrada no repositório do github em _settings > environments > .env_.

### Para rodar o frontend

em outro terminal, entre no diretório do projeto e rode os comandos:

```bash
cd web # entra na pasta web
npm install # instala dependencias
npm run dev # roda o projeto
```

o frontend estará rodando em http://localhost:3000/.

**Obs.**: crie um arquivo .env na raiz da pasta web e coloque a variável de ambiente. Exemplo está no arquivo .env.exemplo.

**Obs.**: para não ser bloqueado pelo erro de CORS é preciso alterar o arquivo em _server > src > app.js_ e na linha 15 colocar o endereço do frontend: `origin: "http://localhost:3000",`.

---

Depois de feitas todas essas configurações, sempre que precisar rodar o projeto, basta executar o comando `npm run dev` em cada pasta (server e web) e o projeto estará rodando.

## Como contribuir

Para contribuir com o projeto, leia: [Como contribuir](https://github.com/alanabacco/passeios-turisticos-bba/blob/main/como-contribuir.md).
