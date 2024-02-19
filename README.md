## Setup

Para rodar o front-end do projeto é necessário instalar as dependências, para isso executa o seguinte comando:

```bash
npm install
# ou
npm i
```

Para rodar o projeto em ambiente de desenvolvimento, execute o seguinte comando:

```bash
npm run start:dev
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
