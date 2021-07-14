let input = {};
let posicionFinal = 0;

function validarSiAlcanzoElFinal(renglon, columna) {
  return renglon === posicionFinal && columna === posicionFinal;
}

function puedeHacerMasMovimientos(movimientosRealizados) {
  return movimientosRealizados < input.numMovimientosPermitidos;
}

function moverIzquierda(renglon, columna, movimiento) {
  if (validarSiAlcanzoElFinal(renglon, columna)) return true;
  if (puedeHacerMasMovimientos(movimiento)) {
    let string = input.strings[renglon];
    let character = string[columna];
    if (character === '.') {
      if (columna < input.numStrings && moverIzquierda(renglon, columna + 1, movimiento + 1)) {
        return true;
      } else if (renglon < input.numStrings && moverAbajo(renglon + 1, columna, movimiento + 1)) {
        return true;
      } else if (renglon > 0 && moverArriba(renglon - 1, columna, movimiento + 1)) {
        return true;
      } else {
        return false;
      }
    }
  } else return false;
}

function moverDerecha(renglon, columna, movimiento) {
  if (validarSiAlcanzoElFinal(renglon, columna)) return true;
  if (puedeHacerMasMovimientos(movimiento)) {
    let string = input.strings[renglon];
    let character = string[columna];
    if (character === '.') {
      if (renglon < input.numStrings && moverAbajo(renglon + 1, columna, movimiento + 1)) {
        return true;
      } else if (columna > 0 && moverDerecha(renglon, columna - 1, movimiento + 1)) {
        return true;
      } else if (renglon > 0 && moverArriba(renglon - 1, columna, movimiento + 1)) {
        return true;
      } else {
        return false;
      }
    }
  } else return false;
}

function moverAbajo(renglon, columna, movimiento) {
  if (validarSiAlcanzoElFinal(renglon, columna)) return true;
  if (puedeHacerMasMovimientos(movimiento)) {
    let string = input.strings[renglon];
    let character = string[columna];
    if (character === '.') {
      if (columna < input.numStrings && moverIzquierda(renglon, columna + 1, movimiento + 1)) {
        return true;
      } else if (renglon < input.numStrings && moverAbajo(renglon + 1, columna, movimiento + 1)) {
        return true;
      } else if (columna > 0 && moverDerecha(renglon, columna - 1, movimiento + 1)) {
        return true;
      } else {
        return false;
      }
    }
  } else return false;
}

function moverArriba(renglon, columna, movimiento) {
  if (validarSiAlcanzoElFinal(renglon, columna)) return true;
  if (puedeHacerMasMovimientos(movimiento)) {
    let string = input.strings[renglon];
    let character = string[columna];
    if (character === '.') {
      if (columna < input.numStrings && moverIzquierda(renglon, columna + 1, movimiento + 1)) {
        return true;
      } else if (columna > 0 && moverDerecha(renglon, columna - 1, movimiento + 1)) {
        return true;
      } else if (renglon > 0 && moverArriba(renglon - 1, columna, movimiento + 1)) {
        return true;
      } else {
        return false;
      }
    }
  } else return false;
}

function buscar(entrada) {
  input = entrada;
  posicionFinal = input.numStrings - 1;
  if (moverIzquierda(0, 0, 0)) {
    return true;
  } else if (moverAbajo(0, 0, 0)) {
    return true;
  }
  return false;
}

module.exports = buscar;
