const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Client = require('./models/Client');

sequelize.sync({force: true}).then(() => console.log('db criado'));
const app = express();


app.use(cors())

app.use(express.json());

app.get('/client', async (req, res) => {
    const alunos = await Client.findAll();
    res.send(alunos);
});

app.get('/client/:id', async (req, res) => {
    const { id } = req.params;
    const aluno = await Client.findOne({ where: { id } });
    res.send(aluno);
});

app.post('/client', async (req, res) => {
    await Client.create(req.body);
    res.send('Cliente criado com sucesso');
});

app.put('/client/:id', async (req, res) => {
    const { id } = req.params;
    const aluno = await Client.findOne({ where: { id } })
    aluno.name = req.body.name;
    await aluno.save();
    res.send('Cliente atualizado com sucesso');
});

app.delete('/client/:id', async (req, res) => {
    const { id } = req.params;
    await Client.destroy({ where: { id } });
    res.send('Cliente deletado com sucesso');
});

app.listen(3001, () => {
    console.log('app is running');
})
