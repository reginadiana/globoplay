![Screenshot_2021-01-02 Apresentação sem título - Apresentações Google](https://user-images.githubusercontent.com/46378210/103469484-3d825a80-4d44-11eb-8071-c131b397a551.png)

## :octocat: Aplicação

O projeto é uma aplicação frontend que realiza uma requisição da API de filmes do Studio Ghibli e os apresenta para o usuário.

## Funcionalidades

:heavy_check_mark: Consumo de API com fetch

:heavy_check_mark: Busca de filmes pelo titulo

:heavy_check_mark: Mostra uma lista de filmes com score maior que 95 

:heavy_check_mark: Layout responsivo

:heavy_check_mark: Botão de ver mais (mostra de 4 em 4 filmes)

### :iphone: Layout 

<img src="https://user-images.githubusercontent.com/46378210/170803030-7e655062-d812-42e3-ade0-ed23c21776e8.png" width="900" />

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
git clone https://github.com/reginadiana/onlymovies
```
Instale as dependencias e execute:

```
$ yarn install && start
```

É possivel acessar o projeto rodando na rota: http://localhost:3001

If you can and wanted give me some **feedback** about my project or README.md, send me a **Pull Requests**. Advices are many welcome and constructive for me :smile:

Give me a **Star** if this project help or inspired you somehow :star:

## Rodando com docker 

```
$ docker-compose build
```

```
$ docker-compose up
```

```
$ docker-compose run --rm --service-ports app bash  
```
