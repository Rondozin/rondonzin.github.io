const veiculoA = prompt ("Insira o nome e a cor do Veículo")
const velocidadeA = prompt("Insira a velocidade desse Veículo")
const veiculoB = prompt ("Insira o nome e a cor do segundo Veículo")
const VelocidadeB = prompt("Insira a velocidade do segundo Veículo")



const X = parseFloat (velocidadeA)
const Y = parseFloat (VelocidadeB)

if (X > Y) {
    alert ("O Carro mais rápido é: " + veiculoA ) 
}
else if (Y > X)  {

    alert ("O Carro mais rápido é: " + veiculoB) 
}

else if (X == Y) {
    alert ("Os dois carros possuem a mesma velocidade!!!")
}


