const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Cases = require('./models/cases');

sequelize.sync({force: true}).then(() => console.log('db criado'));
const app = express();


app.use(cors())

app.use(express.json());

app.get('/cases', async (req, res) => {
    const cases = await Cases.findAll();
    res.send(cases);
});

app.get('/cases/:id', async (req, res) => {
    const { id } = req.params;
    const clientCase = await Cases.findOne({ where: { id } });
    res.send(clientCase);
});

app.post('/cases', async (req, res) => {
    await Cases.create(req.body);
    res.send('depoimento criado com sucesso');
});

app.put('/cases/:id', async (req, res) => {
    const { id } = req.params;
    const clientCase = await Cases.findOne({ where: { id } })
    clientCase.name = req.body.name;
    await clientCase.save();
    res.send('depoimento atualizado com sucesso');
});

app.delete('/cases/:id', async (req, res) => {
    const { id } = req.params;
    await Cases.destroy({ where: { id } });
    res.send('depoimento deletado com sucesso');
});

app.listen(3001, () => {
    console.log('app is running');
})
