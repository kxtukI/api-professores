const exec = require("../src/db.js");
const professoresController = {
    showAll: async (req, res) => {
        try {
            const [rows, fields] = await exec.query("SELECT * FROM professores")
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: "Erro!"
            })
        }
    },
    selectById: async (req, res) => {
        try {
            const { matricula } = req.body
            const [rows, fields] = await exec.query("SELECT * FROM professores WHERE matricula = ?" [matricula])
            res.json({
                data: rows
            })
        } catch (error) {
            res.json({
                status: "Erro!"
            })
        }
    },
    insert: async (req, res) => {
        try {
            const { nome, matricula, data_nascimento } = req.body
            const [rows, fields] = await exec.query("INSERT INTO professores (nome, matricula, data_de_nascimento) VALUES (?, ?, ?)" [nome, matricula, data_nascimento])
            res.json({
                data: rows,
                status: "Professor inserido com Sucesso!"
            })
        } catch (error) {
            res.json({
                status: "Erro!"
            })
        }
    },
    update: async (req, res) => {
        try {
            const { nome, matricula, data_nascimento } = req.body
            const [rows, fields] = await exec.query("INSERT INTO professores (nome, matricula, data_de_nascimento) VALUES (?, ?, ?)" [nome, matricula, data_nascimento])
            res.json({
                data: rows,
                status: "Professor alterado com Sucesso!"
            })
        } catch (error) {
            res.json({
            status: "Erro!"
        })
        }
    }
}

module.exports = professoresController;