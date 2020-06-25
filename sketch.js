
let imagemCenario
let imagemPersonagem
let imagemInimigo
let imagemInimigoVoador
let imagemTroll

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
    cols: 4,
    rows: 4,
    largura: 220,
    altura: 270
}
const trollMatriz = {
    cols: 4,
    rows: 5,
    maxLastRow: 2,
    largura: 400,
    altura: 400
}
const inimigoVoadorMatriz = {
    rows: 5,
    cols: 3,
    largura: 200,
    altura: 150,
    maxLastRow: 0
}


const inimigos = []

function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')
    imagemInimigo = loadImage('assets/imagens/inimigos/gotinha.png')
    imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png')
    imagemTroll = loadImage('assets/imagens/inimigos/troll.png')

    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3')
    somDoPulo = loadSound('assets/sons/somPulo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3)
    personagem = new Personagem(
        personagemMatriz, imagemPersonagem, 
        0, height * .03, 
        110, 135
    )
    inimigos.push(new Inimigo(
        inimigoMatriz, imagemInimigo, 
        width - 52, height * .03, 
        52, 52, 
        5, 100 // velocidade, delay
    ))
    inimigos.push(new Inimigo(
        trollMatriz, imagemTroll, 
        width - 100, 0, 
        200, 200, 
        9, 500 // velocidade, delay
    ))
    inimigos.push(new Inimigo(
        inimigoVoadorMatriz, imagemInimigoVoador,
        width - 52, 200,
        100, 75, 
        5, 1000 // velocidade, delay
    ))

    somDoJogo.loop()
    frameRate(40)
}

function keyPressed() {
    if (keyCode == UP_ARROW){
        personagem.pula()
        somDoPulo.play()
    }
}

function draw() {
    cenario.exibe()
    cenario.move()

    personagem.exibe()
    personagem.aplicarGravidade()
    personagem.move()

    inimigos.map(obj => {
        obj.exibe()
        obj.move()
    })

    if(personagem.estaColidindo(inimigos)) {
        console.log('colidiu')
        // noLoop()
    }
}
