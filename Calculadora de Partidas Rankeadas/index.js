
function nomeDaFuncao(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

for (let i = 1; i <= 3; i++) {
    let vitorias = i * 25
    let derrotas = i * 5

let saldoFinal = nomeDaFuncao(vitorias, derrotas)

let nivel
if (vitorias < 10) {
    nivel = "Ferro"
    
} else if (vitorias <= 20) {
    nivel = "Bronze"
} else if (vitorias <= 50) {
    nivel = "Prata"
} else if (vitorias <= 80) {
    nivel = "Ouro"
} else if (vitorias <= 90) {
    nivel = "Diamante"
} else if (vitorias <= 100) {
    nivel = "Lendário"
} else {
    nivel = "Imortal" 
}
    
console.log("O Herói tem de saldo de " + saldoFinal + " está no nível de " + nivel) }




