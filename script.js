const palavraCompleta = ["P", "A", "T", "O"]
let vida = 3
let palavra = 0

function btnClick() {
    console.log(event.target.id);

    let is = true;
    palavraCompleta.map(letra => {
        if (event.target.id === letra) {
            event.target.style = "color: #0f0; border: 1px solid #0f0; pointer-events: none;"
            document.getElementById(`letra_${event.target.id}`).textContent = letra
            is = false
        }
    })

    if (is) {
        event.target.style = "color: #f00; border: 1px solid #f00; pointer-events: none;"
        document.getElementById(`vida_${vida}`).style = "background-color: #f00;"
        vida = vida - 1
    } else {
        palavra = palavra + 1
        console.log(palavra);
    }

    if (vida <= 0) {
        document.getElementById('main').innerHTML = `
            <div class="msg">    
                <p class="perdeu">você perdeu !!!</p> 
                <button onclick="rest()">jogar novamente</button>
            </div>
            `
    }

    if (palavra === 4) {
        document.getElementById('main').innerHTML = `
            <div class="msg">    
                <p class="ganhou">você ganhou !!!</p> 
                <button onclick="rest()">jogar novamente</button>
            </div>
            `
    }

}

function rest() {
    location.reload()
}