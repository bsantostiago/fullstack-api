import express, { response } from "express";

const app = express();
const porta = 2112;


/* Rotas */
app.get('/', (req, res) => {
    res.send(`API de alunos com Node.js, Express e MySQL`);
});

// GET: Endpoint (rota) para TODOS os alunos da API
app.get('/alunos', (req, res) => {
    res.send(`Dados de TODOS os alunos`);
});

// GET: Endpoint (rota) para dados de UM aluno da API
app.get('/alunos/:id', (req, res) => {
    res.send(`Dados de UM aluno`);
});


// POST: Endpoint para inserir novos alunos
app.post('/alunos', (req, res) => {
    res.send(`Inserindo um aluno`);
});

// PATCH: Endpoint para atualizar todos/alguns dados de UM aluno
app.patch('/alunos/:id', (req, res) => {
    res.send(`Atualizando todos/alguns dados de UM aluno`);
});

// DELETE: Endpoint para excluir alunos
app.delete('/alunos/:id', (req, res) => {
    res.send(`Excluindo UM aluno`);
});


// Configurando a execução do servidor Express
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

