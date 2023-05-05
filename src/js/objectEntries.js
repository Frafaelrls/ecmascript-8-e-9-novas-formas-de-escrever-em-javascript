const cursos = {
    node: 90,
    angular: 70,
    react: 50,
    backbone: 80
};

const cursosChaves = Object.keys(cursos);
document.getElementById('cursos').innerHTML = `<ul>
    ${cursosChaves.map(curso => `<li>${curso}</li>`)}
</ul>`

// Retorna um objeto onde dentro dele tenha um array com chave e valor
const cursosEntries = Object.entries(cursos);

document.getElementById('cursosEntries').innerHTML = `<ul>
    ${cursosEntries.map(curso => `<li>${curso[0]} - ${curso[1]} alunos</li>`)}
</ul>`

const cursosMap = new Map(cursosEntries);

console.log(cursosMap.get('node'));
console.log(cursosMap.has('java'));
