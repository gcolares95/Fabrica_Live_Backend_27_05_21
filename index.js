const express = require('express');
const app = express();

const port = 3000;
 
app.get('/hello', (req, res) => {
  res.send('Hello World');
});
 
/*
Lista de Endpoints na aplicação CRUD de mensagens
CRUD: Create, Read(Single & All), Update and Delete
CRUD: Criar, Ler(Individual e Tudo), Atualizar e Remover
- [GET] /mensagens - Retorna a lista de mensagens
- [GET] /mensagens/{id} - Retorna apenas uma mensagem pelo ID
- [POST] /mensagens - Cria novas mensagem
- [PUT] /mensagens/{id} - atualiza uma nova mensagem pelo ID
- [DELETE] /mensagens/{id} - remove uma mensagem pelo ID
*/

const mensagens = [
  "Essa é a primeira mensagem", 
  "Essa é a segunda mensagem",
  "Essa é a terceira mensagem"
]

// - [GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

// - [GET] /mensagens/{id} - Retorna apenas uma mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
  const id = req.params.id - 1;
  const mensagem = mensagens[id];
  
  res.send(mensagem);
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});
