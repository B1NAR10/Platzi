
function ola(nome, oMeuCallback){
    setTimeout(function(){
        console.log('Ola, ' + nome);
        oMeuCallback(nome);
        }, 1500);
}

function falar(callbackFalar){
    setTimeout(function(){
        console.log('Bla, bla, bla, bla... ');
        callbackFalar();
    }, 1000)
}

function adeus(nome,outroCallback){
    setTimeout(function(){
        console.log('Adeus ' + nome);
        outroCallback();
    }, 1000)
}

function conversa(nome, veces, callback){
    if (veces >= 0){
        falar(function(){
            conversa(nome, --veces, callback);
        })
    } else {
        adeus(nome, callback)
    }
    
}

// -- 

console.log('Iniciando Proceso...');
ola('Alberto', function(nome){
   conversa(nome, 3, function(){
      console.log('Rematando Proceso...');     
   });
});


// ola('Alberto', function(nome){
//     adeus(nome, function(){
//         console.log('Rematamos ');
//     });

// });

// ola('Alberto', function(nome){
//     falar(function(){
//         falar(function(){
//             falar(function(){
//                 adeus('Alberto', function(){
//                     console.log('Rematando Proceso...');
//                 });
//             });    
//         });    
//     });   
// })
