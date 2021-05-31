const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();

const port = 3000;

app.use(bodyParser.json());

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
    res.send(mensagens.filter(Boolean));
});

// - [GET] /mensagens/{id} - Retorna apenas uma mensagem pelo ID
app.get('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;
    const mensagem = mensagens[id];
  
    res.send(mensagem);
});

//- [POST] /mensagens - Cria novas mensagem
app.post('/mensagens', (req, res) => {
    const mensagem = req.body.mensagem;  
    
    mensagens.push(mensagem);

    res.send(`mensagem criada com sucesso: '${mensagem}'`);

});

// - [PUT] /mensagens/{id} - atualiza uma nova mensagem pelo ID
app.put('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;

    const mensagem = req.body.mensagem;

    mensagens[id] = mensagem;

    res.send(`Mensagem atualizada com sucesso: '${mensagem}'.`);
});

// - [DELETE] /mensagens/{id} - remove uma mensagem pelo ID
app.delete('/mensagens/:id', (req, res) => {
    const id = req.params.id - 1;
    
    delete mensagens[id];

    res.send('Mensagem removida com sucesso');
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});
