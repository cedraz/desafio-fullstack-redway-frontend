# Setup

Para rodar o projeto, siga os passos abaixo:

## Docker

Primeiro de tudo instale o Docker e o Docker Compose

Caso esteja utilizando ubuntu, é necessário adicionar o sudo antes de qualquer comando envolvendo o docker, exemplo:

`sudo docker ...`

para criar o container, execute o comando:

```sh
docker compose up
```

Caso não deseje que os logs da aplicação apareçam utilize a flag "-d", ela serve para rodar o container em modo "detached", ou seja, em segundo plano, sem mostrar os logs no terminal.

Para acessar a site, acesse o link abaixo:

http://localhost:3000

<br/>

-------

para checar todos os containers criados:

```sh
docker ps -a
```

para checar os containers que estão rodando:

```sh
docker ps
```

para rodar o container:

```sh
docker compose start api-redway-pg
```

caso queira parar o container:

```sh
docker compose stop
```

caso queira remover o container:

```sh
docker compose down
```

## Configuração do ESlint

Caso sua máquina seja Windows, altere a opção: `"linebreak-style"` para: 

```json
"linebreak-style": [
    "error",
    "windows"
]
```

Caso sua máquina seja Linux ou Mac, altere a opção: `"linebreak-style"` para: 

```json
"linebreak-style": [
    "error",
    "unix"
]
```
