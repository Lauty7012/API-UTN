const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes.js');
const path = require('path');

app.use(express.json());
app.use(cors());

app.use('/api/products', routes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
