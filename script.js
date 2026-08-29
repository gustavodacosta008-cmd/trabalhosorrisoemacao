// ------------------------------------------
// INICIAR GOLPE
// ------------------------------------------

const nomeCenario =
    document.getElementById("nome-do-cenario");

function iniciarGolpe(golpe) {

    // Limpa a conversa
    chat.innerHTML = "";

    // Reseta pontuação
    pontuacao = 0;

    // Reseta histórico
    historico = [];

    nomeCenario.textContent =
    golpe.titulo;

    numeroDecisao.textContent = "0";


    // Atualiza informações do contato

    const nomeContato =
        document.querySelector(".contact-info h2");

    const avatar =
    document.getElementById("avatar-contato");

    avatar.src =
        golpe.avatar;


    nomeContato.textContent =
        golpe.contato;


    // Adiciona mensagens iniciais

    golpe.mensagemInicial.forEach((mensagem, index) => {

    const agora = new Date();

    agora.setMinutes(
        agora.getMinutes() - (golpe.mensagemInicial.length - 1 - index)
    );


    const horario =
        agora.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });


    adicionarMensagem(
        mensagem,
        "received",
        horario
    );

});


    // Mostra primeiras opções

    mostrarOpcoes(
        golpe.opcoes
    );

}

// ==========================================
// VOCÊ CAIRIA NESSE GOLPE?
// Sistema de diálogo e pontuação
// ==========================================


// ------------------------------------------
// VARIÁVEIS
// ------------------------------------------

let pontuacao = 0;

let historico = [];

const chat = document.querySelector(".chat");
const options = document.querySelector(".options");
const numeroDecisao =
    document.getElementById("numero-decisao");

// ------------------------------------------
// TELA INICIAL
// ------------------------------------------

// ------------------------------------------
// MOSTRAR CENÁRIOS
// ------------------------------------------

function mostrarCenarios() {

    const telaInicial =
        document.getElementById("tela-inicial");

    const telaCenarios =
        document.getElementById("tela-cenarios");


    // Esconde a tela inicial
    telaInicial.style.display = "none";


    // Mostra os cenários
    telaCenarios.style.display = "flex";

}

// ------------------------------------------
// SELECIONAR GOLPE
// ------------------------------------------

function selecionarGolpe(tipo) {

    const telaCenarios =
        document.getElementById("tela-cenarios");

    const aplicativo =
        document.getElementById("aplicativo");


    // Esconde a tela de cenários
    telaCenarios.style.display = "none";


    // Mostra o aplicativo
    aplicativo.style.display = "flex";


    // Carrega o golpe escolhido
    iniciarGolpe(golpes[tipo]);

}

// ------------------------------------------
// ADICIONAR MENSAGEM
// ------------------------------------------

function adicionarMensagem(texto, tipo, horarioPersonalizado = null) {

    const mensagem = document.createElement("div");

    mensagem.classList.add("message", tipo);


    // ------------------------------------------
    // CONTEÚDO
    // ------------------------------------------

    const conteudo = document.createElement("span");

    conteudo.innerHTML = texto;


    // ------------------------------------------
    // HORÁRIO
    // ------------------------------------------

    const horario = document.createElement("span");

    horario.classList.add("horario");


    let horarioFinal;


    if (horarioPersonalizado) {

        horarioFinal = horarioPersonalizado;

    } else {

        const agora = new Date();

        horarioFinal =
            agora.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit"
            });

    }


    horario.textContent = horarioFinal;


    // ------------------------------------------
    // CONFIRMAÇÃO DE LEITURA
    // ------------------------------------------

    if (tipo === "sent") {

        horario.innerHTML +=
            ' <span class="checks">✓✓</span>';

    }


    // ------------------------------------------
    // MONTAGEM
    // ------------------------------------------

    mensagem.appendChild(conteudo);

    mensagem.appendChild(horario);

    chat.appendChild(mensagem);

    chat.scrollTop = chat.scrollHeight;

}

// ------------------------------------------
// INDICADOR "DIGITANDO..."
// ------------------------------------------

function mostrarDigitando() {

    const digitando = document.createElement("div");

    digitando.classList.add("typing");

    digitando.innerHTML = `
        <span class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    `;

    chat.appendChild(digitando);

    chat.scrollTop = chat.scrollHeight;

    return digitando;
}


// ------------------------------------------
// MOSTRAR OPÇÕES
// ------------------------------------------

function mostrarOpcoes(opcoes) {

    options.innerHTML = "";

    // Se não existem mais opções,
    // significa que chegamos ao final.
    if (opcoes.length === 0) {

        finalizarJogo();

        return;
    }


    opcoes.forEach(opcao => {

        const botao = document.createElement("button");

        botao.textContent = opcao.texto;


        botao.addEventListener("click", () => {

            // Registra a escolha
            historico.push({
                escolha: opcao.texto,
                pontos: opcao.pontos
            });

            numeroDecisao.textContent =
    historico.length;


            // Atualiza pontuação
            pontuacao += opcao.pontos;


            // Mostra mensagem do jogador
            adicionarMensagem(
                opcao.texto,
                "sent"
            );


            // Remove os botões enquanto responde
            options.innerHTML = "";


           const indicador = mostrarDigitando();


setTimeout(() => {

    // Remove o "digitando..."
    indicador.remove();


    // Mostra a resposta
    adicionarMensagem(
        opcao.resposta,
        "received"
    );


    // Continua exatamente como antes
    mostrarOpcoes(opcao.proximas);

}, 1200);

        });


        options.appendChild(botao);

    });
}


// ------------------------------------------
// FINAL DO JOGO
// ------------------------------------------

function finalizarJogo() {

    options.innerHTML = "";

    setTimeout(() => {

        let titulo;
        let mensagem;
        let classe;
        let nivel;
        let recomendacao;

        if (pontuacao >= 40) {

            titulo = "🟢 Você não caiu no golpe!";

            nivel = "Muito atento 🛡️";

            mensagem =
                "Suas decisões mostraram bastante cautela durante a conversa. Você procurou formas mais seguras de verificar a situação antes de agir.";

            recomendacao =
                "Continue priorizando canais oficiais e verificações independentes sempre que receber um contato inesperado.";

            classe = "resultado-seguro";

        }

        else if (pontuacao >= 10) {

            titulo = "🟡 Você quase caiu no golpe!";

            nivel = "Em alerta ⚠️";

            mensagem =
                "Você percebeu alguns sinais de risco, mas também tomou decisões que poderiam permitir que a conversa avançasse.";

            recomendacao =
                "Quando algo parecer urgente ou estranho, evite continuar apenas pela conversa recebida. Confirme a situação por outro canal.";

            classe = "resultado-atencao";

        }

        else {

            titulo = "🔴 Você caiu no golpe!";

            nivel = "Vulnerável ao cenário 🚨";

            mensagem =
                "Algumas decisões tomadas durante a conversa aumentaram bastante o risco de você confiar na situação apresentada.";

            recomendacao =
                "Antes de fornecer informações, realizar pagamentos ou seguir instruções inesperadas, confirme quem está entrando em contato.";

            classe = "resultado-perigo";

        }


        const totalDecisoes =
            historico.length;


        const decisoesSeguras =
            historico.filter(item =>
                item.pontos > 0
            ).length;


        const decisoesArriscadas =
            historico.filter(item =>
                item.pontos < 0
            ).length;


        const resultado =
            document.createElement("div");


        resultado.classList.add(
            "resultado",
            classe
        );


        resultado.innerHTML = `

            <h2>${titulo}</h2>

            <p>${mensagem}</p>

            <div class="pontuacao">
                Pontuação:
                <strong>${pontuacao}</strong>
            </div>

            <div class="nivel-atencao">
                <strong>Nível de atenção:</strong>
                ${nivel}
            </div>

            <div class="resumo-decisoes">

                <p>
                    ✅ Decisões seguras:
                    <strong>${decisoesSeguras}</strong>
                </p>

                <p>
                    ⚠️ Decisões arriscadas:
                    <strong>${decisoesArriscadas}</strong>
                </p>

                <p>
                    💬 Total de decisões:
                    <strong>${totalDecisoes}</strong>
                </p>

            </div>

            <div class="recomendacao">

                <h3>💡 Recomendação</h3>

                <p>${recomendacao}</p>

            </div>

            <h3>🔎 Suas decisões</h3>

            <div class="historico">

                ${historico.map((item, index) => `

                    <div class="decisao">

                        <strong>
                            ${index + 1}.
                        </strong>

                        ${item.escolha}

                        <span>
                            ${item.pontos > 0 ? "+" : ""}
                            ${item.pontos} pts
                        </span>

                    </div>

                `).join("")}

            </div>

            <button
                class="reiniciar"
                onclick="voltarParaCenarios()"
            >
                🔄 Jogar novamente
            </button>

        `;


        chat.appendChild(resultado);

        chat.scrollTop =
            chat.scrollHeight;

    }, 500);
}

// ------------------------------------------
// REINICIAR
// ------------------------------------------

function reiniciarJogo() {

    pontuacao = 0;

    historico = [];

    chat.innerHTML = "";

    adicionarMensagem(
        "Olá! Identificamos uma movimentação suspeita em sua conta.",
        "received"
    );

    adicionarMensagem(
        "Foi detectada uma tentativa de compra no valor de <strong>R$ 2.847,00</strong>.",
        "received"
    );

    adicionarMensagem(
        "Caso você não reconheça essa movimentação, precisamos confirmar algumas informações.",
        "received"
    );

    iniciarGolpe(golpes.banco);
}

// ------------------------------------------
// VOLTAR PARA SELEÇÃO DE CENÁRIOS
// ------------------------------------------

function voltarParaCenarios() {

    const aplicativo =
        document.getElementById("aplicativo");

    const telaCenarios =
        document.getElementById("tela-cenarios");


    // Esconde o aplicativo
    aplicativo.style.display = "none";


    // Mostra a seleção de cenários
    telaCenarios.style.display = "flex";


    // Limpa a conversa
    chat.innerHTML = "";

    // Limpa os botões
    options.innerHTML = "";

    // Reseta pontuação
    pontuacao = 0;

    // Reseta histórico
    historico = [];

    // Reseta contador
    numeroDecisao.textContent = "0";

}

// ------------------------------------------
// VOLTAR PARA TELA INICIAL
// ------------------------------------------

function voltarParaInicio() {

    const telaInicial =
        document.getElementById("tela-inicial");

    const telaCenarios =
        document.getElementById("tela-cenarios");


    // Esconde a seleção de cenários
    telaCenarios.style.display = "none";


    // Mostra a tela inicial
    telaInicial.style.display = "flex";

}

