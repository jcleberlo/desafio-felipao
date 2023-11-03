let heroi = "Dev"
let nivel = "Ferro"
let xp = 0

console.log("XP atingido: " + xp)
console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")

for(let i = 0; i < 15000; i++){
    xp++
    if(xp === 1001){
        nivel = "Bronze"
        console.log("XP atingido: " + xp)
        console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")
    }
    else if(xp === 2001){
        nivel = "Prata"
        console.log("XP atingido: " + xp)
        console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")
    }
    else if(xp === 5001){
        nivel = "Ouro"
        console.log("XP atingido: " + xp)
        console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")
    }
    else if(xp === 7001){
        nivel = "Platina"
        console.log("XP atingido: " + xp)
        console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")
    }
    else if(xp === 8001){
        nivel = "Ascendente"
        console.log("XP atingido: " + xp)
        console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")
    }
    else if(xp === 9001){
        nivel = "Imortal"
        console.log("XP atingido: " + xp)
        console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")
    }    
    else if(xp === 10001){
        nivel = "Radiante"
        console.log("XP atingido: " + xp)
        console.log("O herói de nome " + heroi + " está no nível " + nivel + ".")
    }
}



