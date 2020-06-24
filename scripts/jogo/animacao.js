
class Animacao {
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz
        this.imagem = imagem
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.larguraSprite = larguraSprite
        this.alturaSprite = alturaSprite

        this.frameX = 0
        this.frameY = 0
    }

    exibe() {
        image(
            this.imagem,
            this.x, this.y,
            this.largura, this.altura,
            this.frameX * this.matriz.x, this.frameY * this.matriz.y,
            this.larguraSprite, this.alturaSprite
        )
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