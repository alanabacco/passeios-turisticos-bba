# Passeios turísticos em Borborema - SERVER

## Sobre o projeto

Passeios turísticos em Borborema é um sistema web criado para centralizar todas as informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações.

Sistema web feito para a disciplina do Projeto Integrador I dos cursos de Computação da UNIVESP, trabalho feito em grupo.

## Ferramentas e tecnologias utilizadas

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Como executar o projeto localmente

Para executar o projeto de maneira local, execute os comandos, um de cada vez:

```
git clone https://github.com/alanabacco/passeios-turisticos-bba
cd passeios-turisticos-bba
cd server
npm install
npm run dev
```

estará rodando na porta 8080.

Obs.: é preciso fazer a conexão com o banco de dados em: ./src/config/config.json

- Banco de dados utilizado neste projeto: [postgresql](https://www.postgresql.org/).

<!--
## Modelos de comandos úteis no projeto

- npx sequelize-cli model:generate --name guia_turistico --attributes nome:string,telefone:integer,tipos_turismo:string

- npx sequelize-cli db:migrate

- npx sequelize-cli seed:generate --name demo-guia

- npx sequelize-cli db:seed:all

- npx eslint ./src --fix

-->
