/* Forma 1
function falarVerdade() {
    return 'verdade';
    }
*/

/* Forma 02
 const falarVerdade = () => {
     return 'verdade';
      }
*/

// Forma 3

const falarVerdade = function (texto) {
    return texto;
    }

const somar = (valor1, valor2) => {
    return valor1 + valor2;
}

exports.falarVerdade = falarVerdade;
exports.somar = somar;




