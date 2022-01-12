/*let texto = 'verdade';
const complementar = ' Já esperava isso!';
console.log (texto + ',' + complementar);
Outra forma de digitar
 console.log(`${texto}, ${complementar}`);*/




const biblioteca = require ('./biblioteca');
const Pessoa = require ('./Classe');

console.log(biblioteca.falarVerdade('Verdade'));
console.log(biblioteca.somar(5, 1));

const itna = new Pessoa('Itna Santana', 30);
console.log(itna.getNome());



let mensagem = (itna.getIdade() >30) ? 'Uma Mulher experiente!' : 'Uma Mulher nova!';
console.log(mensagem);