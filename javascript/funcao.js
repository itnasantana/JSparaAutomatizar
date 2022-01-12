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
      
console.log (falarVerdade('Verdade'));