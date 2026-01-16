const express = require('express');
const app = express();
const PORT = 3000;


// Status do sistema
app.get('/status', (req, res) => {
  res.status(200).send('Sistema do Polo Industrial funcionando');
});

// Fábrica
app.get('/fabrica', (req, res) => {
  res.status(200).send('Polo Industrial - Unidade Manaus');
});

// Máquinas
app.get('/maquinas', (req, res) => {
  res.status(200).send('Maquinas em operacao: 24');
});


app.get('/dados', (req, res) => {
  const dados = {
    empresa: 'Polo Industrial',
    cidade: 'Manaus',
    status: 'Operando',
    maquinasAtivas: 24,
    funcionarios: 120,
    turnoAtual: 'Manhã'
  };

  res.status(200).json(dados);
});


app.get('/relatorio', (req, res) => {
  const agora = new Date();

  const relatorio = {
    data: agora.toLocaleDateString(),
    hora: agora.toLocaleTimeString(),
    statusGeral: 'Operação normal',
    mensagem: 'Todos os sistemas estão funcionando corretamente'
  };

  res.status(200).json(relatorio);
});


app.use((req, res) => {
  res.status(404).send('Rota não encontrada');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});