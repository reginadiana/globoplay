![Screenshot_2021-01-02 Apresentação sem título - Apresentações Google](https://user-images.githubusercontent.com/46378210/103469484-3d825a80-4d44-11eb-8071-c131b397a551.png)

## :octocat: Aplicação

O projeto é uma aplicação frontend que realiza uma requisição da API de filmes do Studio Ghibli e os apresenta para o usuário.

## :star: Deploy

> https://list-movies.netlify.app/

## Funcionalidades

:heavy_check_mark: Consumo de API com fetch

:heavy_check_mark: Busca de filmes pelo titulo

:heavy_check_mark: Mostra uma lista de filmes com score maior que 95 

:heavy_check_mark: Layout responsivo

### :iphone: Layout 

![Screenshot_2021-01-02 Netflix](https://user-images.githubusercontent.com/46378210/103469380-b1bbfe80-4d42-11eb-8dfc-acf7f5347519.png)

## Resources

:books: React

:books: React Boostrap

:books: AntDesing 

## :floppy_disk: JSON/Mock

Exemplo de resposta da API: https://ghibliapi.herokuapp.com/films

```json
"title": "Castle in the Sky",
"description": "The orphan Sheeta inherited a mysterious crystal [...],
"director": "Hayao Miyazaki",
"producer": "Isao Takahata",
"release_date": "1986",
"rt_score": "95",
```

## Arquitetura

### Paginas

- Home: Apresenta o cabeçalho, campo de busca, lista de filmes, melhores scores e rodapé.

## Como rodar a aplicação

Clone este projeto e entre na pasta:

```
git clone https://github.com/reginadiana/list-movies && list-movies
```
Instale as dependencias e execute:

```
$ yarn install && start
```

É possivel acessar o projeto rodando na rota: http://localhost:3000

If you can and wanted give me some **feedback** about my project or README.md, send me a **Pull Requests**. Advices are many welcome and constructive for me :smile:

Give me a **Star** if this project help or inspired you somehow :star:

## Rodando com docker 

```
$ docker-compose build
```

```
$ docker-compose up
```
