const nome = 'Felippe';
const sobrenome = 'Rafael';

const nomeCompleto = `${nome} ${sobrenome}`

// padStart adiciona um prefíxo a string, informando o número final de caractéres

const nomeCompletoStringPadding = sobrenome.padStart(14, nome);

document.getElementById('stringPad').innerHTML = nomeCompletoStringPadding;

// padend adiciona um sufixo a string, informando o número final de caractéres

const nomeCompletoPadEnd = nome.padEnd(14, sobrenome);

document.getElementById('stringPadEnd').innerHTML = nomeCompletoPadEnd;