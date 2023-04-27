const pool = require("../src/db.js");
const professoresController = {
    listarTodos: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM professores");
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "Erro!"
            })
        }
    },
    exibirMatricula: async (req, res) => {
        try {
            const { matricula } = req.params
            const [rows, fields] = await pool.query("SELECT * from professores WHERE matricula = ?", [matricula])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "Erro!"
            })
        }
    },
    criarProfessor: async (req, res) => {
        try {
            const { nome, matricula, data_de_nascimento } = req.body
            const sql = "INSERT into professores (nome, matricula, data_de_nascimento) values (?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [nome, matricula, data_de_nascimento])
            res.json({
                status: "Professor inserido com Sucesso!"
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "Erro!"
            })
        }
    },
    atualizarProfessor: async (req, res) => {
        try {
            const { matricula } = req.params
            const { nome, data_de_nascimento } = req.body
            const sql = "UPDATE professores SET nome = ?, data_de_nascimento = ? WHERE matricula = ?"
            const [rows, fields] = await pool.query(sql, [nome, data_de_nascimento, matricula])
            res.json({
                status: "Professor alterado com Sucesso!"
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "Erro!"
            })
        }
    },
    deletarProfessor: async (req, res) => {
        try {
            const { matricula } = req.params
            const [rows, fields] = await pool.query("DELETE from professores WHERE matricula = ?", [matricula])
            res.json({
                status: "Professor excluído com Sucesso!"
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "Erro!"
            })
        }
    },
}

module.exports = professoresController;