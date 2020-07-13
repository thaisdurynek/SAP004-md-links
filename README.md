# Md-Links

O Md-links é uma biblioteca que lê arquivos md e filtra,
valida e traz estatísticas sobre os links do arquivo.

## Índice

* [1. Instalação](#1-instalação)
* [2. Como utilizar](#2-como-utilizar)
* [3. Considerações Técnicas](#3-considerações-técnicas)
* [4. Autoria](#4-autoria)

***

## 1. Instalação

Para a utilização da biblioteca é importante ter o [Nodejs](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/).
Para instalar o projeto usando npm escreva no seu terminal:

`npm install --global https://github.com/thaisdurynek/SAP004-md-links`

## 2. Como utilizar

A aplicação pode ser executada da seguinte maneira:

`md-links <path-to-file>`

### Opções

`--validate`: Funciona fazendo uma requisição HTTP para verificar se o link resulta em um redirecionamento 
a uma URL e o status da resposta.

`--stats`: Tem como output a quantidade total de links e quantos são únicos.

`--validate e --stats`: Tem como output, além do total de links e quantos são únicos, a quantidade de links quebrados.

Para utilizar as opções basta digitar:

`md-links <path-to-file> [options]`

Exemplo:

`md-links './test/test.md' --validate`

## 3. Considerações técnicas

Esse projeto foi realizado utilizando:

- [Nodejs](https://nodejs.org/en/)

- [NPM](https://www.npmjs.com/)

- [AXIOS](https://www.npmjs.com/package/axios)

## 4. Autoria

Projeto desenvolvido por [Thais Durynek](https://github.com/thaisdurynek) com base no projeto proposto pela [Laboratoria](https://github.com/Laboratoria).
