# AULA 01

## Documentação oficial
- https://swagger.io/docs/open-source-tools/swagger-ui/customization/overview/
  

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


Além de escrever uma documentação no formato JSON podemos também utilizar uma estrutura de arquivo YAML. Fique à vontade para utilizar a que melhor atender às suas necessidades, mas lembre-se de se atentar à versão de OpenAPI que irá utilizar, pois, como mencionado, existem diferenças na estrutura quando estamos falando da versão 3.0 ou da 2.0.

