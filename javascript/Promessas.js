const politico = new Promise(
    function(resolve, reject) {
        setTimeout(function () {resolve ('Mentira!'); },  5000)
}
);

 politico.then(function(texto) {
     console.log(texto);


 });