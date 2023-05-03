const aprovados = ['Marcelo', 'Aline', 'Gustavo', 'Ricardo'];

for (let nome of aprovados){
    if(nome === 'Gustavo'){
        console.log('Aprovado');
    }else{
        console.log('Nome não encontrado');
    }
}

const nomeIndexOf = aprovados.indexOf('Gustavo');
console.log(nomeIndexOf);

const nomeAprovado = aprovados.includes('Gustavo');

if(nomeAprovado){
    console.log('Você foi aprovado')
} else {
    console.log('Você não foi aprovado')
}
console.log(nomeAprovado);