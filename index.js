const input = require('./entrada.json');
const buscar = require('./find');

if (buscar(input)) {
  console.log('YES');
} else {
  console.log('NO');
}
