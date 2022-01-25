import conexao from './banco.js';

/* Funções para o CRUD */

function ler( res ){
    // Comando SQL a ser executado
    const sql = "SELECT * FROM alunos ORDER BY nome";

    // Executa a query a partir da conexao
    conexao.query(sql, (erro, resultados) => {
        // Função com os parâmetros de erro e resultados

        // Se não houver resultados
        if(resultados.length === 0){
            // Indicamos o status de sem conteudo e encerra
            res.status(204).end();
            return; // para o script
        }

        /* Verificação básica por erro */
        if(erro){
            // Deu ruim, indica o status 400 e exibir o erro
            res.status(400).json(erro.code);
        } else {
            // Funcionou, então status 200 (OK) e apresenta JSON
            res.status(200).json(resultados);
        }
    });
}

function inserir(aluno, res) {
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(201).json({"status" : "aluno inserido!"});

            // ou res.status(201).end();
        }
    });
}

function lerUm(id, res){
    const sql = "SELECT * FROM alunos WHERE id = ?";
    conexao.query(sql, id, (erro, resultados) => {
        
        if(resultados.length === 0){
            res.status(204).end();
            return; 
        }

        if(erro){
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]);
        }
    });
}

function atualizar(id, aluno, res){
    const sql = "UPDATE alunos SET ? WHERE id = ?";
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro){
            res.status(400).json(erro.code);
        } else {
            // Saída simples de sucesso
            // res.status(200).json({"status": "atualizado com sucesso"});

            // Saída mais detalhada
            res.status(200).json( {...aluno, id} );
        }
    });
}


export { ler, inserir, lerUm, atualizar };