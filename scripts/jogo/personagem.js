class Personagem extends Animacao {
    constructor(matriz, imagem, x, y, largura, altura) {
        super(matriz, imagem, x, y, largura, altura)

        this.velocidadeDoPulo = 0
        this.gravidade = 3
        this.baseY = this.y
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

    estaColidindo(inimigos) {
        const precisao = 0.7
        let colidiu = false

        inimigos.map(inimigo => {
            colidiu = colidiu || collideRectRect(
                this.x, this.y,
                this.largura * precisao, 
                this.altura * precisao,
                inimigo.x,
                inimigo.y,
                inimigo.largura * precisao,
                inimigo.altura * precisao
            )
        })

        return colidiu
    }
}
