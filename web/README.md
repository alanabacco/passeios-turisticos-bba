# Passeios turísticos em Borborema - WEB

## Sobre o projeto

Passeios turísticos em Borborema é um sistema web criado para centralizar todas as informações sobre turismo na cidade de Borborema, como eventos na cidade, passeios turísticos, guias, restaurantes, hospedagens, entre outras informações.

Sistema web feito para a disciplina do Projeto Integrador dos cursos de Computação da UNIVESP, trabalho feito em grupo.

## Ferramentas e tecnologias utilizadas

- [React](https://react.dev/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Como executar o projeto localmente

Para executar o projeto de maneira local, primeiro você precisa ter o [NodeJS](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados na sua máquina. Em seguida, execute os seguintes comandos, um de cada vez em um terminal:

```bash
git clone https://github.com/alanabacco/passeios-turisticos-bba # clona o repositório
cd passeios-turisticos-bba # entra na pasta do projeto

cd web # entra na pasta web
npm install # instala dependencias
npm run dev # roda o projeto
```

o frontend estará rodando na porta 3000.

**Obs.**: crie um arquivo .env na raiz da pasta web e coloque a variável de ambiente. Exemplo está no arquivo .env.exemplo.

**Obs.**: para não ser bloqueado pelo erro de CORS é preciso alterar o arquivo em _server > src > app.js_ e na linha 11 colocar o endereço do frontend: `origin: "http://localhost:3000",`
