import express from "express";
import cors from 'cors';
import { ler, inserir, lerUm, atualizar, excluir } from './src/aluno.js';

const app = express();
const porta = process.env.PORT || 3000;
 
app.use(cors()); // permite acesso através das aplicações

// Habilitando o express a funcionar com dados JSON
app.use(express.json());

// Habilitando o express a funcionar com dados a partir de inputs
app.use( express.urlencoded({extended:true}) );


/* Rotas */
app.get('/', (req, res) => {
    res.send(`API de alunos com Node.js, Express e MySQL`);
});

// GET: Endpoint (rota) para TODOS os alunos da API
app.get('/alunos', (req, res) => {
    // res.send(`Dados de TODOS os alunos`);

    ler(res);
});

// GET: Endpoint (rota) para dados de UM aluno da API
app.get('/alunos/:id', (req, res) => {
    // res.send(`Dados de UM aluno`);

    // Capturando o valor do parametro id vindo da url
    const id = parseInt(req.params.id);

    lerUm(id, res);
});


// POST: Endpoint para inserir novos alunos
app.post('/alunos', (req, res) => {
    // res.send(`Inserindo um aluno`);

    // Capturando os dados a partir do corpo da requisição
    const novoAluno = req.body;

    inserir(novoAluno, res);
});

// PATCH: Endpoint para atualizar todos/alguns dados de UM aluno
app.patch('/alunos/:id', (req, res) => {
    // res.send(`Atualizando todos/alguns dados de UM aluno`);

    const id = parseInt(req.params.id);
    const aluno = req.body;
    atualizar(id, aluno, res);
});

// DELETE: Endpoint para excluir alunos
app.delete('/alunos/:id', (req, res) => {
    // res.send(`Excluindo UM aluno`);
    const id = parseInt(req.params.id);
    excluir(id, res);
});


// Configurando a execução do servidor Express
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

