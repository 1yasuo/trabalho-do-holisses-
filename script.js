const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um mensageiro chega ao seu vilarejo com a notícia de que um exército invasor se aproxima. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Eu me preparo para defender minha terra!",
                afirmacao: "Você imediatamente começou a treinar com sua espada e escudo, pronto para defender seu lar. "
            },
            {
                texto: "Eu procuro informações sobre o inimigo antes de agir.",
                afirmacao: "Você buscou o ancião da vila em busca de sabedoria e conselhos sobre a situação. "
            }
        ]
    },
    {
        enunciado: "Seu lorde o encarrega de uma missão vital: encontrar a rota de invasão do exército inimigo. Qual abordagem você escolhe para a missão?",
        alternativas: [
            {
                texto: "Uso um mapa e meu conhecimento do terreno para encontrar um caminho secreto.",
                afirmacao: "Você utilizou com sucesso seu conhecimento da terra para obter informações críticas sem ser detectado. "
            },
            {
                texto: "Me disfarço de viajante para me infiltrar e coletar informações entre os mercadores e taberneiros.",
                afirmacao: "Você usou astúcia e charme para extrair inteligência valiosa de viajantes desavisados. "
            }
        ]
    },
    {
        enunciado: "O conselho de guerra se reúne para discutir a melhor estratégia de batalha. Qual é a sua proposta?",
        alternativas: [
            {
                texto: "Defendo um ataque frontal e direto, usando a força total do nosso exército.",
                afirmacao: "Você defendeu um assalto corajoso e direto, inspirando seus camaradas com sua determinação. "
            },
            {
                texto: "Sugiro uma emboscada estratégica, usando o terreno para pegar o inimigo de surpresa.",
                afirmacao: "Você propôs uma emboscada inteligente e cautelosa, priorizando a tática e a segurança de suas tropas. "
            }
        ]
    },
    {
        enunciado: "Após a vitória em uma batalha, seu lorde decide que é hora de criar um novo estandarte para o seu regimento. Você é o responsável pela tarefa. E agora?",
        alternativas: [
            {
                texto: "Pinto o estandarte à mão, com os símbolos tradicionais da minha casa.",const caixaPrincipal = document.querySelector(".caixa-principal");
2
const caixaPerguntas = document.querySelector(".caixa-perguntas");
3
const caixaAlternativas = document.querySelector(".caixa-alternativas");
4
const caixaResultado = document.querySelector(".caixa-resultado");
5
const textoResultado = document.querySelector(".texto-resultado");
6
​
7
const perguntas = [
8
    {
9
        enunciado: "Um mensageiro chega ao seu vilarejo com a notícia de que um exército invasor se aproxima. Qual é sua primeira reação?",
10
        alconst caixaPrincipal = document.querySelector(".caixa-principal");
2
const caixaPerguntas = document.querySelector(".caixa-perguntas");
3
const caixaAlternativas = document.querySelector(".caixa-alternativas");
4
const caixaResultado = document.querySelector(".caixa-resultado");
5
const textoResultado = document.querySelector(".texto-resultado");
6
​
7
const perguntas = [
8
    {
9
        enunciado: "Um mensageiro chega ao seu vilarejo com a notícia de que um exército invasor se aproxima. Qual é sua primeira reação?",
10
        alternativas: [
11
            {
12
                texto: "Eu me preparo para defender minha terra!",
13
                afirmacao: "Você imediatamente começou a treinar com sua espada e escudo, pronto para defender seu lar. "
14
            },
15
            {
16
                texto: "Eu procuro informações sobre o inimigo antes de agir.",
17
                afirmacao: "Você buscou o ancião da vila em busca de sabedoria e conselhos sobre a situação. "
18
            }
19
        ]
20
    },
21
    {
22
        enunciado: "Seu lorde o encarrega de uma missão vital: encontrar a rota de invasão do exército inimigo. Qual abordagem você escolhe para a missão?",
23
        alternativas: [
24
            {
25
                texto: "Uso um mapa e meu coternativas: [
11
            {
12
                texto: "Eu me preparo para defender minha terra!",
13
                afirmacao: "Você imediatamente começou a treinar com sua espada e escudo, pronto para defender seu lar. "
14
            },
15
            {
16
                texto: "Eu procuro informações sobre o inimigo antes de agir.",
17
                afirmacao: "Você buscou o ancião da vila em busca de sabedoria e conselhos sobre a situação. "
18
            }
19
        ]
20
    },
21
    {
22
        enunciado: "Seu lorde o encarrega de uma missão vital: encontrar a rota de invasão do exército inimigo. Qual abordagem você escolhe para a missão?",
23
        alternativas: [
24
            {
25
                texto: "Uso um mapa e meu co
                afirmacao: "Você pintou com orgulho um magnífico estandarte à mão, exibindo sua lealdade e habilidade para todos que o viam. "
            },
            {
                texto: "Contrato um artesão renomado de uma terra distante para criar um estandarte com um desenho intimidador.",
                afirmacao: "Você contratou um artesão renomado para criar um estandarte único e intimidante, infundindo medo nos corações de seus inimigos. "
            }
        ]
    },
    {
        enunciado: "Durante um cerco a uma fortaleza inimiga, um engenheiro propõe o uso de uma catapulta nova e poderosa, mas totalmente não testada. Ela é rápida, mas pode falhar catastroficamente. O que você faz?",
        alternativas: [
            {
                texto: "Decido usar a nova catapulta, confiando em seu poder para acabar com o cerco rapidamente.",
                afirmacao: "Você confiou completamente na nova arma, mas sua natureza imprevisível levou a um resultado inesperado, ensinando-lhe uma dura lição sobre confiar em tecnologia não testada. "
            },
            {
                texto: "Escolho aderir às táticas de cerco tradicionais e confiáveis.",
                afirmacao: "Você escolheu confiar em táticas e experiências comprovadas, levando suas tropas a uma vitória lenta, mas segura, e conquistando a confiança total delas. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "E assim, a história do seu reino foi escrita...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
