const personagemA = prompt ("Insira o nome do personagem atacante!")
const ataqueA = prompt ("Insira agora o poder de ataque desse personagem!")
const personagemB= prompt ("Agora insira o nome do personagem que receberá o ataque")
const VidaB = prompt ("Insira a quantidade de vida do personagem")
const defesaB = prompt ("Agora insira a quantidade de defesa que ele tem")
const escudoB = prompt  ("Esse personagem possui um escudo? responda com Sim ou Não")






const ataque = parseFloat (ataqueA)
const vida = parseFloat (VidaB)
const defesa = parseFloat (defesaB)
const Escudo = (escudoB == "Sim") ? 1 : 0



if (ataque > defesa)  {
    const diferença = ( ataque - defesa ); 
    const vidaRestante = ( vida - diferença)
    const VidaRestanteB = (Escudo == 1) ? vida - (diferença/2) : vidaRestante
    const Resultado = (VidaRestanteB > 0) ? "Ele sobreviveu ao ataque" : "Ele foi de arrasta"
    
    alert (personagemB + " " + "Sofreu dano\n" +
    "\nVida restante de: " + " " + personagemB + " " + "é de" + " " + VidaRestanteB +
    "\nO Dano sofrido pelo ataque foi de: " + (vida - VidaRestanteB) +
    "\nApós o movimento de: " + " " + personagemA + " " + Resultado)
    


}



else if (ataque <= defesa) {
    const danoCausado0 = 0
    window.alert ("O Ataque de: " + " " + personagemA + " " + "não surtil nenhum dano ao " + personagemB +
    "\nO Dano causado foi de: " + danoCausado0)


}



