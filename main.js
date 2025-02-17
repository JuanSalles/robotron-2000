let corDoRobo = "Vermelho";
let srcDaImg = "/robotron.png";

const listaDePecas = [{
    nome: "Bracos", 
    contador: 0,
    src: "/Braço.png"
},
{
    nome: "Blindagem", 
    contador: 0,
    src: "/Blindagem.png"
},
{
    nome: "Nucleos", 
    contador: 0,
    src: "/Núcleo.png"
},
{
    nome: "Foguetes", 
    contador: 0,
    src: "/Foguete.png"
},
{
    nome: "Pernas", 
    contador: 0,
    src: "/Perna.png"
},
];

const atributosDoRobo= {
    forca: 0,
    energia: 0,
    poder: 0,
    velocidade: 0
}

function exibir (contador, tagDoControle) {
    if((`${contador}`).length < 2){
        tagDoControle.value  = `0${contador}`;
    }else{
        tagDoControle.value  = `${contador}`;
    }    
}

function filtroDelista (event){
    const arrayPartToChange = listaDePecas.filter(element => {
        if(event.target.id.includes(element.nome)){
            return element
        }
    });
    const partToChange = arrayPartToChange[0];
    return partToChange;
}

function mudarImagem (imagem) {
    document.querySelector("#robotron").src = "img/" + corDoRobo + imagem;
}

function atributos (){

  
    atributosDoRobo.forca = (listaDePecas[0].contador*30) + (listaDePecas[3].contador*10) + (listaDePecas[4].contador*20);
    atributosDoRobo.energia = (listaDePecas[2].contador*30);
    atributosDoRobo.poder = (listaDePecas[0].contador*20) + (listaDePecas[1].contador*20) + (listaDePecas[2].contador*20) + (listaDePecas[3].contador*20) + (listaDePecas[4].contador*20);
    atributosDoRobo.velocidade = (listaDePecas[2].contador*5) + (listaDePecas[3].contador*30) + (listaDePecas[4].contador*30) - (listaDePecas[1].contador*5);
    
            document.querySelector("#forca").textContent = atributosDoRobo.forca;
            document.querySelector("#energia").textContent = atributosDoRobo.energia;
            document.querySelector("#poder").textContent = atributosDoRobo.poder;
            document.querySelector("#velocidade").textContent = atributosDoRobo.velocidade;


}

document.querySelector("#botao-robotron").addEventListener("click", (event) => {
    srcDaImg = "/robotron.png";
    mudarImagem(srcDaImg);
});

document.querySelector("#robotron").addEventListener("click", (event) => {

    switch(corDoRobo){

        case "Vermelho":
            corDoRobo = "Azul";
            break;
        case "Azul":
            corDoRobo = "Rosa";
            break;
        case "Rosa":
            corDoRobo = "Preto";
            break;
        case "Preto":
            corDoRobo = "Amarelo";
            break;
        case "Amarelo":
            corDoRobo = "Branco";
            break;
        case "Branco":
            corDoRobo = "Vermelho";
            break;
    }
    mudarImagem(srcDaImg);
})


document.querySelector("[data-controle]").addEventListener("click", (event) => {

    if(event.target.id.includes("soma")){
        const peca = filtroDelista(event);
        srcDaImg = peca.src;
        mudarImagem(srcDaImg);
        if(("soma" + peca.nome) == (event.target.id)){
            if(peca.contador<12){
                peca.contador++;
                atributos();
                exibir(peca.contador, document.querySelector(`#${peca.nome}`));
            }else{
                document.querySelector("#chat-robotron").textContent = "Peraí mizeravi, tudo tem limite!";
                srcDaImg = "/robotron.png";
                mudarImagem(srcDaImg);
            }
        }
        
    }else if(event.target.id.includes("subtrai")){
        const peca = filtroDelista(event);
        srcDaImg = peca.src;
        mudarImagem(srcDaImg);
        if(("subtrai" + peca.nome) == (event.target.id)){
            if(peca.contador>0){
                peca.contador--;
                atributos();
                exibir(peca.contador, document.querySelector(`#${peca.nome}`));
                
            }
        }
        
    }
    
});
