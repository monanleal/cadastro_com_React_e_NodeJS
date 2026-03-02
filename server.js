import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.send('Aqui deu certooo')
})


app.get('/usuarios', (req, res) => {
    res.json(users)
})

app.listen(3000)

/*
    Criar nossa API de usuários

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário

*/