# Passeios turísticos em Borborema - SERVER

## Sobre o projeto

Passeios turísticos em Borborema é um sistema web criado para centralizar todas as informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações.

Sistema web feito para a disciplina do Projeto Integrador dos cursos de Computação da UNIVESP, trabalho feito em grupo.

## Ferramentas e tecnologias utilizadas

- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Postgresql](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)

## Como executar o projeto localmente

Para executar o projeto de maneira local, primeiro você precisa ter o [NodeJS](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados na sua máquina. O banco de dados utilizado neste projeto é o [postgresql](https://www.postgresql.org/), também é bom ter ele instalado na máquina.

Em seguida, execute os seguintes comandos, um de cada vez em um terminal:

```bash
git clone https://github.com/alanabacco/passeios-turisticos-bba # clona o repositório
cd passeios-turisticos-bba # entra na pasta do projeto

cd server # entra na pasta server
npm install # instala dependencias

# fazer a conexão com o banco de dados para continuar

npm run db:reset # para criar o banco de dados, tabelas e popular com dados de teste
npm run dev # roda o projeto
```

o backend estará rodando na porta 8080.

**Obs.**: é preciso fazer a **conexão com o banco de dados** e colocar as variáveis ambiente em um arquivo .env na pasta server. Exemplo de variáveis ambiente está no arquivo .env.exemplo, coloque a senha do banco de dados da sua máquina em `DEV_DB_PASSWORD=''`. A variável `HASH_SECRET` pode ser encontrada no repositório do github em _settings > environments > .env_.

- recomendo a extensão do VS Code [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para testar as rotas.

## Como executar os testes

Para executar os testes, execute o seguinte comando em um terminal, dentro do diretório server:

```bash
npm run test
```

Com esse comando, o banco de dados será recriado e os testes serão executados.

<!--
## Modelos de comandos úteis no projeto

- npx sequelize-cli model:generate --name guia_turistico --attributes nome:string,telefone:integer,tipos_turismo:string

- npx sequelize-cli db:migrate

- npx sequelize-cli seed:generate --name demo-guia

- npx sequelize-cli db:seed:all

- npx eslint ./src --fix

-->
