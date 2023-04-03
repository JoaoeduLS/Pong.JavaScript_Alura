
//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diameBolinha = 20;
let raio= diameBolinha/2;

//variaveis da raquete
let xRect = 5;
let yRect = 150;

//variaveis do oponente
let xRectOponente=585;
let yRectOponente=150;
let veloyOponente;

let colidiu = false;

//chance de erro
let chanceDeErrar = 0;

//placa do jogo
let meuspontos=0;
let pontosoponente=0;


//velocidade
let veloxBolinha = 6;
let veloyBolinha = 6;
let raquetecomprimento=10;
let raquetealtura=90;

//quadro negro
function setup() {
  createCanvas(600, 400);
}

//chamando as funções

function draw() {
  background(0);
  mostrabolinha();
  movimentobolinha();
  verificacolizaobord();              
  movimentodaraquete();
  //verificaColizaocomRaquete();
  mostraraquete(xRect,yRect);
  colisaoRaqueBiblio();  mostraraquete(xRectOponente,yRectOponente);
  moveraqueteoponente();
  colisaoRaqueteOponenteBiblioteca();
  incluirplacar();
  marcaponto();
  movimentaRaqueteOponente();
  
  
  
//funções 
function mostrabolinha(){
   circle(xBolinha, yBolinha, diameBolinha);
   
}

  
function movimentobolinha(){
  
  xBolinha += veloxBolinha;
  yBolinha += veloyBolinha;
}

  
function verificacolizaobord(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0){
    veloxBolinha *= -1;
  }
  else if(yBolinha + raio > height || yBolinha - raio < 0){
    veloyBolinha *= -1;
  } 
 } 
  
  function mostraraquete(x,y){
  rect(x,y,raquetecomprimento,raquetealtura);
  }
  
 
  
  function movimentodaraquete(){
    
    if (keyIsDown(UP_ARROW)){
      yRect -= 10;
    }
    else if(keyIsDown(DOWN_ARROW)){
      yRect += 10;
    }
  }
  
  /*function verificaColizaocomRaquete(){
  if(xBolinha - diameBolinha < xRect + raquetecomprimento && yBolinha - diameBolinha < yRect +    raquetealtura && yBolinha + diameBolinha > yRect){
veloxBolinha *= -1
}
  }*/
  
  function colisaoRaqueBiblio(){
    colidiu =
collideRectCircle(xRect,yRect,raquetecomprimento,raquetealtura,xBolinha,yBolinha,diameBolinha);
    
    if(colidiu){
    veloxBolinha *= -1
    }
  }
  
  function moveraqueteoponente(){
  veloyOponente= yBolinha - yRectOponente- raquetecomprimento/2-30;
    yRectOponente += veloyOponente
  }
  
  function colisaoRaqueteOponenteBiblioteca() {
    colidiu = collideRectCircle(xRectOponente, yRectOponente, raquetecomprimento, raquetealtura, xBolinha, yBolinha, diameBolinha);
    if (colidiu){
        veloxBolinha *= -1;
    }
}
  
  function incluirplacar(){
   stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosoponente, 470, 26);
  }
  function marcaponto() {
    if (xBolinha > 590) {
        meuspontos += 1;
    }
    else if (xBolinha < 10) {
        pontosoponente += 1;
    }
}
  
  function movimentaRaqueteOponente(){
  veloyOponente = yBolinha -yRectOponente - raquetecomprimento / 2 - 30;
  yRectOponente += veloyOponente + chanceDeErrar
  calculaChanceDeErrar()
}
  
  
  function calculaChanceDeErrar() {
  if (pontosoponente >= meuspontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
  
  function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
}
