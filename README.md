# Desafio para o processo seletivo SHARENERGY 2023/01

### Deve ser realizado o clone do projeto

- Após o clone, abra o terminal e execute o comando <b>npm install</b>

- Esta sendo utilizado variáveis de ambiente no projeto, então é necessário que após instalar as dependências no passo acima,
 você procure pelo arquivo <b>.env.sample</b> na pasta raiz do sistema, copie, cole e renomeie o arquivo para <b>.env</b>
 
- Dentro do arquivo <b>.env</b> você pode editar a porta em que o servidor ira rodar e também será necessário colocar o token que é fornecido para conexão com o mongoDB.


## Rotas
- exemplo de baseUrl: http://localhost:3000

### User Routes 

```
http://localhost:3000/user
- Criar usuários
  /save - POST
    
- Buscar usuários
  /findall - GET
    
- Buscar usuário por id
  /update/:id - PUT

- Delete usuário
  /delete/:id - delete

```

### Login Routes

```
- Criar login 
 /save  -  POST

 -Realizar login
 /auth/token - POST
```


### Apis Utilizadas 

```
- Gerar usuario aleatorio
https://randomuser.me/api/

- Gerar imagem aleatória de um Doguinho
https://random.dog/

- Acessar um Status Code que retorna um Gato
https://http.cat/

```

### É Necessario a criação de login no mongodb para gerar o MONGO_URI
- Através do https://www.mongodb.com/

## A documentação do backend esta na pasta raiz do sistema, documentation.txt

## DEMONSTAÇÃO DO PROJETO NO LINK
https://youtu.be/TkSw6GBBUMQ