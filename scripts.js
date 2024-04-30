
const resposta = document.querySelector(".resultado")

const seuPonto = document.querySelector("#seu-ponto")

const pontoRobo = document.querySelector("#ponto-robo")

const GAME_ESCOLHA = {
  PEDRA: 'pedra',
  PAPEL: 'papel',
  TESOURA: 'tesoura'
}


let pontoSeu = 0
let roboPonto = 0


const playVoce = (suaEscolha)=>{
   
    jogo(suaEscolha, playRobo())


}



const playRobo = ()=> {
    const escolha = [GAME_ESCOLHA.PEDRA, GAME_ESCOLHA.PAPEL, GAME_ESCOLHA.TESOURA]

    const random = Math.floor(Math.random() * 3)

      return escolha[random]      


}


const jogo = (voce, robo) => {
   
   
   
   
      console.log(voce + robo)  

      if (voce === robo) {
        resposta.innerHTML ="&#x1F916; " + (robo.toUpperCase())  + " &#x1F605; EMPATOU! "
        
        
      } else if (
        voce === GAME_ESCOLHA.PEDRA && robo === GAME_ESCOLHA.TESOURA ||
        voce === GAME_ESCOLHA.PAPEL && robo === GAME_ESCOLHA.PEDRA ||
        voce === GAME_ESCOLHA.TESOURA && robo === GAME_ESCOLHA.PAPEL )
        {
        pontoSeu++
        resposta.innerHTML = "&#x1F916; " + (robo.toUpperCase()) + " &#x1F601; VC GANHOU!"
        seuPonto.innerHTML = pontoSeu

      } else {

        roboPonto++
        resposta.innerHTML ="&#x1F916;" + (robo.toUpperCase()) + " &#x1F921; VC PERDEU!"
        pontoRobo.innerHTML = roboPonto

      }
    
    }