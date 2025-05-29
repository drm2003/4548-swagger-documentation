# AULA 01

## Instalação do Swagger

- Habilitar o Swagger na aplicação. A partir do terminal, vamos instalar o Swagger com o comando npm install swagger-ui-express.

```
    npm install swagger-ui-express
```

- Em seguida, instalamos @types/swagger-ui-express como dependência de desenvolvimento com npm install @types/swagger-ui-express --save-dev.

```
    npm install @types/swagger-ui-express --save-dev
```

## Configuração do Middleware

- Vamos adicionar this.express.use();

## Definição da Estrutura do Arquivo swagger.json

- No arquivo swagger.json, especificamos que estamos usando o padrão 3.0 da OpenAPI. Se houver algo no trabalho que utilize uma versão diferente, o arquivo mudará. Para documentações novas, recomenda-se usar a versão mais recente, 3.0. Podemos dar um título à documentação, que será atualizado automaticamente. Assim, deixamos o arquivo pronto, realizando poucas alterações.





## Há a estrutura openai

- npm install swagger-jsdoc
- npm install @types/swagger-jsdoc --save-dev