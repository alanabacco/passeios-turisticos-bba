# Passeios turísticos em Borborema

## Sobre o projeto

Passeios turísticos em Borborema é um sistema web criado para centralizar todas as informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações.

Sistema web feito para a disciplina do Projeto Integrador I dos cursos de Computação da UNIVESP, trabalho feito em grupo.

Para acessar a página online do projeto, entre em [passeiosturisticosbba.vercel.app](https://passeiosturisticosbba.vercel.app/)

Neste repositório se encontram os diretórios

- [server](https://github.com/alanabacco/passeios-turisticos-bba/tree/main/server), que contém o backend da aplicação;
- [web](https://github.com/alanabacco/passeios-turisticos-bba/tree/main/web), contendo o frontend.

## Ferramentas e tecnologias utilizadas

### Backend

- [NodeJS](https://nodejs.org/) - ambiente de execução JavaScript
- [Express](https://expressjs.com/) - framework para Node.js
- [Sequelize](https://sequelize.org/) - ORM (Object-Relational Mapper) para Node.js
- [postgresql](https://www.postgresql.org/) - ferramenta de sistema de gerenciamento de bancos de dados

### Frontend

- [React](https://react.dev/) - biblioteca de código aberto para interfaces gráficas
- [NextJS](https://nextjs.org/) - framework para React
- [TypeScript](https://www.typescriptlang.org/) - superset de javascript que adiciona recursos à linguagem

## Como executar o projeto localmente

Para executar o projeto de maneira local, você precisa ter o [NodeJS](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados na sua máquina. Em seguida, execute os seguintes comandos, um de cada vez em um terminal:

```bash
git clone https://github.com/alanabacco/passeios-turisticos-bba
cd passeios-turisticos-bba
```

Para rodar o backend:

```bash
cd server
npm install
npm run dev
```

o backend estará rodando na porta 8080.

obs.: é preciso fazer a conexão com o banco de dados em: ./src/config/config.js e configurar as variáveis de ambiente.

Para rodar o frontend, em outro terminal rode os comandos:

```bash
cd web
npm install
npm run dev
```

o frontend estará rodando na porta 3000.
