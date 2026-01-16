const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../../database/usuarios.json');

function read() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function write(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { read, write };