// function sonAsincrona(oMeuCallback){
//     //console.log('Ola, son unha funcion Asícrona');
//     setTimeout(function(){
//         console.log('Estou sendo asíncrona');
//         oMeuCallback();
//     }, 1000);
// }

function ola(nome, oMeuCallback){
    setTimeout(function(){
        console.log('Ola, ' + nome);
        oMeuCallback(nome);
        }, 1500);
}

function adeus(nome,outroCallback){
    setTimeout(function(){
        console.log('Adeus ' + nome);
        outroCallback();
    }, 1000)
}

console.log('Iniciando Proceso...');
ola('Alberto', function(){
    adeus('Alberto', function(){
        console.log('Rematando Proceso...');
    })
})

// ola('Alberto', function(){});
// adeus('Alberto', function(){});