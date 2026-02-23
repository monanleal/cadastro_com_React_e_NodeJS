import express from 'express'

const app = express()

const users = []

app.post('/usuarios', (req, res ))

app.get('/usuarios', (req, res) => {
    res.send('Ok, deu bom')
})

app.listen(3000)

/*
    Criar nossa API de usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário

*/