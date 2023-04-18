const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/cifras', (req, res) => {
    const cifra = req.body; // Dados enviados no corpo da requisição
    // Salvar a cifra em um banco de dados ou arquivo, por exemplo
    res.status(201).send('Cifra cadastrada com sucesso!');
  });

  app.get('/cifras', (req, res) => {
    const cifras = []; // Buscar as cifras salvas em um banco de dados ou arquivo, por exemplo
    res.status(200).send(cifras);
  });

  const PORT = 3000; // Porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
