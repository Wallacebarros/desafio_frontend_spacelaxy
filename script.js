const categorias = [
    ["Cores",
        ["V", "E", "R", "M", "E", "L", "H", "O"],
        ["A", "Z", "U", "L"],
        ["A", "M", "A", "R", "E", "L", "O"],
        ["V", "E", "R", "D", "E"],
        ["R", "O", "S", "A"]
    ],
    ["Animais",
        ["C", "A", "C", "H", "O", "R", "R", "O"],
        ["G", "A", "T", "O"],
        ["E", "L", "E", "F", "A", "N", "T", "E"],
        ["L", "E", "A", "O"],
        ["G", "I", "R", "A", "F", "A"]
    ],
    ["Frutas",
        ["U","V","A"],
        ["B", "A", "N", "A", "N", "A"],
        ["L", "A", "R", "A", "N", "J", "A"],
        ["M", "O", "R", "A", "N", "G", "O"],
        ["A", "B", "A", "C", "A", "X", "I"]
    ],
    ["Países",
        ["B", "R", "A", "S", "I", "L"],
        ["A","N","G","O","L","A"],
        ["F", "R", "A", "N", "C", "A"],
        ["P","E","R","U"],
        ["A", "U", "S", "T", "R", "A", "L", "I", "A"]
    ],
    ["Profissões",
        ["M", "E", "D", "I", "C", "O"],
        ["E", "N", "G", "E", "N", "H", "E", "I", "R", "O"],
        ["P", "R", "O", "F", "E", "S", "S", "O", "R"],
        ["A", "D", "V", "O", "G", "A", "D", "O"],
        ["C", "O", "Z", "I", "N", "H", "E", "I", "R", "O"]
    ]
];

let vida = 4
let palavra = 0
let numeroAleatorio = Math.floor(Math.random() * 5);
const palavras = document.getElementById('palavra')

let array = categorias[Math.floor(Math.random() * 5)]
let categoria = array[0]
let palavraCompleta = array[Math.floor(Math.random() * 4) + 1]

palavraCompleta.map(letra => {
    palavras.innerHTML += `
    <span class="letra_${letra}">_</span>
    `
})

document.getElementById("categoria").innerHTML = categoria

function btnClick() {
    let is = true;
    let rep = 0;
    palavraCompleta.map(letra => {
        if (event.target.id === letra) {
            event.target.style = "color: #0f0; border: 1px solid #0f0; pointer-events: none;"
            document.getElementsByClassName(`letra_${event.target.id}`)[rep].innerHTML = event.target.id
            rep++
            is = false
        }
        
    })

    if (is) {
        event.target.style = "color: #f00; border: 1px solid #f00; pointer-events: none;"
        document.getElementById(`vida_${vida}`).style = "background-color: #f00;"
        vida = vida - 1
    } else {
        palavra = palavra + rep
    }

    if (vida <= 0) {
        document.getElementById('main').innerHTML = `
            <div class="msg">    
                <p class="perdeu">você perdeu !!!</p> 
                <button onclick="rest()">jogar novamente</button>
            </div>
            `
    }

    if (palavra === palavraCompleta.length) {
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