
let imagemCenario
let imagemPersonagem
let imagemInimigo
let cenario
let personagem

let somDoJogo, somDoPulo
const inimigoMatriz = {
    rows: 6,
    cols: 3,
    largura: 104,
    altura: 104
}
const personagemMatriz = {
    cols: 3,
    rows: 3,
    largura: 220,
    altura: 270
}

function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png')

    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3')
    somDoPulo = loadSound('assets/sons/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3)
    personagem = new Personagem(
        personagemMatriz, imagemPersonagem, 
        0, height - 135, 
        110, 135
    )
    inimigo = new Inimigo(inimigoMatriz, imagemInimigo, width - 52, height - 52 , 52, 52)
    somDoJogo.loop()

    frameRate(40)
}

function keyPressed() {
    if(key == 'ArrowUp') {
        personagem.pula()
        somDoPulo.play()
    }
}

function draw() {
    cenario.exibe()
    cenario.move()

    personagem.exibe()
    personagem.aplicarGravidade()

    inimigo.exibe()
    inimigo.move()

    if(personagem.estaColidindo(inimigo)) {
        console.log('colidiu')
        noLoop()
    }
}
