
class Inimigo extends Animacao {
    constructor(matriz, imagem, x, y, largura, altura) {
        super(matriz, imagem, x, y, largura, altura)
    }

    move() {
        this.x -= 10
        if (this.x < -this.largura) {
            this.x = this.x = width
        }
    }
}