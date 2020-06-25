class Personagem extends Animacao {
    constructor(matriz, imagem, x, y, largura, altura) {
        super(matriz, imagem, x, y, largura, altura)

        this.velocidadeDoPulo = 0
        this.gravidade = 3
        this.baseY = height - this.altura
        this.pulos = 0
    }
    
    pula() {
        this.pulos++
        rotate(PI / 7.0)
        if(this.pulos <= 2) {
            this.velocidadeDoPulo = -25
        }
    }

    aplicarGravidade() {
        this.y += this.velocidadeDoPulo
        this.velocidadeDoPulo += this.gravidade

        if(this.y > this.baseY) {
            this.y = this.baseY
            this.pulos = 0
        }
    }

    estaColidindo(inimigo) {
        const precisao = 0.7
        const colisao = collideRectRect(
            this.x, this.y,
            this.largura * precisao, 
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        )

        return colisao
    }
}
