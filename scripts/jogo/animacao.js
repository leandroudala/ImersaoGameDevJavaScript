
class Animacao {
    constructor(matriz, imagem, x, y, largura, altura) {
        this.matriz = matriz
        this.imagem = imagem
        this.largura = largura
        this.altura = altura
        this.frameX = 0
        this.frameY = 0
        this.x = x
        this.y = height - this.altura - y
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
        if (++this.frameX >= this.matriz.cols) {
            this.frameX = 0
            this.frameY++
        }
        if (this.frameY >= this.matriz.rows) {
            this.frameY = 0
        }
        if (this.matriz.maxLastRow) {
            if (this.frameY == this.matriz.rows && this.frameX >= this.matriz.maxLastRow) {
                this.frameX = 0
                this.frameY = 0
            }
        }
    }
}