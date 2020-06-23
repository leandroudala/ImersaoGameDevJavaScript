class Personagem {
    constructor(imagem) {
        this.imagem = imagem

        this.frameX = 0
        this.frameY = 0

        // altura do personagem na tela
        this.personagemAltura = 135
        this.personagemLargura = 110
        
        // tamanho do personagem na imagem
        this.personagemImagemAltura = 270
        this.personagemImagemLargura = 220

        // posição do personagem na tela
        this.posicaoTelaX = 0
        this.posicaoTelaY = height - this.personagemAltura
    }

    exibe() {
        // posX, posY, width, height, 0, 0, imageX, imageY, imageWidth, imageHeight
        image(this.imagem, 
            this.posicaoTelaX, this.posicaoTelaY, // posição do personagem na tela
            this.personagemLargura, this.personagemAltura, // tamanho do personagem na tela
            this.frameX * this.personagemImagemLargura, this.frameY * this.personagemImagemAltura,
            this.personagemImagemLargura, this.personagemImagemAltura) // tamanho do quadrado
        
            this.anima()
    }

    anima() {
        this.frameX++
        if (this.frameX > 3) {
            this.frameX = 0
            this.frameY++
        }
        if (this.frameY > 3) {
            this.frameY = 0
        }
    }
}
