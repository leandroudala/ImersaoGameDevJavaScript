
class Animacao {
    constructor(matriz, imagem, x, y, largura, altura) {
        this.matriz = matriz
        this.imagem = imagem
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        this.frameX = 0
        this.frameY = 0
    }

    exibe() {
        image(
            this.imagem,
            this.x, this.y,
            this.largura, this.altura,
            this.frameX * this.matriz.largura, this.frameY * this.matriz.altura,
            this.matriz.largura, this.matriz.altura
        )
        this.anima()
    }

    anima() {
        this.frameX++
        if (this.frameX > this.matriz.cols) {
            this.frameX = 0
            this.frameY++
        }
        if (this.frameY > this.matriz.rows) {
            this.frameY = 0
        }
    }
}