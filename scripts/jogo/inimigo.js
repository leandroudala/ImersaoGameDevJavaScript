
class Inimigo extends Animacao {
    constructor(matriz, imagem, x, y, largura, altura, velocidade, atraso) {
        super(matriz, imagem, x, y, largura, altura)
        this.velocidade = velocidade || 5
        this.atraso = atraso || 0
        this.x += this.atraso
    }

    move() {
        this.x -= this.velocidade
        if (this.x < -this.largura) {
            this.x = width + this.atraso
        }
    }
}