// ==========================================
// BANCO DE GOLPES
// VOCÊ CAIRIA NESSE GOLPE?
// ==========================================


const golpes = {

    banco: {

    titulo: "Falso Banco",

    descricao:
        "Uma suposta equipe de segurança entra em contato informando uma movimentação suspeita.",

    contato: "Segurança Digital",

    avatar: "assets/perfis/banco.png",

    mensagemInicial: [

        "Olá! Identificamos uma movimentação suspeita em sua conta.",

        "Foi detectada uma tentativa de compra no valor de <strong>R$ 2.847,00</strong>.",

        "Caso você não reconheça essa movimentação, precisamos confirmar algumas informações."

    ],

    opcoes: [

        // ==========================================
        // CAMINHO 1 — VERIFICA PELO APP
        // ==========================================

        {
            texto: "Vou verificar no aplicativo oficial.",

            pontos: 20,

            resposta:
                "Tudo bem. Mas talvez seja mais rápido confirmar sua identidade por aqui para bloquear a compra imediatamente.",

            proximas: [

                {
                    texto: "Prefiro verificar pelo aplicativo.",

                    pontos: 25,

                    resposta:
                        "Entendo. Mas precisamos agir rápido porque a compra pode ser aprovada a qualquer momento.",

                    proximas: [

                        {
                            texto: "Mesmo assim, só vou resolver pelo aplicativo.",

                            pontos: 30,

                            resposta:
                                "Você manteve a decisão de utilizar um canal oficial, mesmo diante da pressão para agir rapidamente.",

                            proximas: []
                        },

                        {
                            texto: "Tá bom, o que você precisa confirmar?",

                            pontos: -15,

                            resposta:
                                "Precisamos validar algumas informações da conta antes de realizar o bloqueio.",

                            proximas: [

                                {
                                    texto: "Pensando melhor, não vou informar nada por aqui.",

                                    pontos: 25,

                                    resposta:
                                        "Você decidiu interromper a conversa antes de fornecer informações e voltou para um canal oficial.",

                                    proximas: []
                                },

                                {
                                    texto: "Pode perguntar.",

                                    pontos: -30,

                                    resposta:
                                        "Você continuou fornecendo confiança ao contato sem confirmar se ele realmente pertencia ao banco.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },

                {
                    texto: "Tudo bem, o que você precisa?",

                    pontos: -10,

                    resposta:
                        "Precisamos confirmar alguns dados para cancelar a movimentação antes que ela seja concluída.",

                    proximas: [

                        {
                            texto: "Antes disso, vou ligar para o banco.",

                            pontos: 30,

                            resposta:
                                "Você decidiu verificar a situação diretamente com a instituição antes de fornecer qualquer informação.",

                            proximas: []
                        },

                        {
                            texto: "Pode continuar.",

                            pontos: -25,

                            resposta:
                                "A conversa avançou sem que você tivesse confirmado se o contato era realmente do banco.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 2 — PERGUNTA SOBRE A COMPRA
        // ==========================================

        {
            texto: "Que compra é essa?",

            pontos: 5,

            resposta:
                "Foi uma compra de R$ 2.847,00. Para cancelá-la, precisamos confirmar alguns dados antes que seja aprovada.",

            proximas: [

                {
                    texto: "Onde essa compra foi feita?",

                    pontos: 10,

                    resposta:
                        "A transação apareceu como uma compra online. Não conseguimos fornecer mais detalhes até confirmar sua identidade.",

                    proximas: [

                        {
                            texto: "Então vou conferir no meu aplicativo.",

                            pontos: 30,

                            resposta:
                                "Você decidiu verificar diretamente no histórico da conta em vez de confiar apenas na mensagem recebida.",

                            proximas: []
                        },

                        {
                            texto: "Tudo bem, como confirmo minha identidade?",

                            pontos: -20,

                            resposta:
                                "Para continuar, precisaríamos validar algumas informações da conta.",

                            proximas: [

                                {
                                    texto: "Não vou informar nada. Vou falar com o banco.",

                                    pontos: 30,

                                    resposta:
                                        "Você interrompeu o processo antes de compartilhar informações e procurou um canal oficial.",

                                    proximas: []
                                },

                                {
                                    texto: "Pode continuar.",

                                    pontos: -30,

                                    resposta:
                                        "Você decidiu continuar com uma solicitação de dados sem conseguir verificar a origem do contato.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },

                {
                    texto: "Pode me mandar um link para cancelar.",

                    pontos: -30,

                    resposta:
                        "Podemos enviar uma página de confirmação, mas o cancelamento precisa ser feito rapidamente.",

                    proximas: [

                        {
                            texto: "Pensando melhor, vou entrar no aplicativo oficial.",

                            pontos: 30,

                            resposta:
                                "Você desistiu de seguir uma página recebida pela conversa e optou por um canal oficial.",

                            proximas: []
                        },

                        {
                            texto: "Tudo bem, vou continuar por aqui.",

                            pontos: -35,

                            resposta:
                                "Você decidiu continuar por um caminho indicado pelo próprio contato sem confirmar se ele era legítimo.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 3 — PEDE PARA CANCELAR
        // ==========================================

        {
            texto: "Pode cancelar para mim.",

            pontos: -10,

            resposta:
                "Claro. Antes disso, precisamos confirmar que estamos falando com o titular da conta.",

            proximas: [

                {
                    texto: "Que informações você precisa?",

                    pontos: -15,

                    resposta:
                        "Precisamos validar alguns dados básicos para autorizar o bloqueio da compra.",

                    proximas: [

                        {
                            texto: "Não vou fornecer informações por mensagem.",

                            pontos: 25,

                            resposta:
                                "Você percebeu o risco e decidiu não compartilhar informações por um contato inesperado.",

                            proximas: [

                                {
                                    texto: "Vou ligar para o banco pelo número oficial.",

                                    pontos: 30,

                                    resposta:
                                        "Você decidiu confirmar a situação diretamente com a instituição.",

                                    proximas: []
                                },

                                {
                                    texto: "Mas pode me explicar o que aconteceu.",

                                    pontos: -5,

                                    resposta:
                                        "Você continuou a conversa, mas sem fornecer informações. Ainda assim, o mais seguro seria confirmar a situação por outro canal.",

                                    proximas: []
                                }

                            ]
                        },

                        {
                            texto: "Tudo bem, pode confirmar.",

                            pontos: -30,

                            resposta:
                                "Você aceitou avançar com uma confirmação de identidade sem verificar quem estava do outro lado.",

                            proximas: []
                        }

                    ]
                },

                {
                    texto: "Vou verificar diretamente com o banco.",

                    pontos: 25,

                    resposta:
                        "Tudo bem. Mas recomendamos resolver agora, porque a transação ainda está em processamento.",

                    proximas: [

                        {
                            texto: "Vou encerrar e falar com o banco.",

                            pontos: 30,

                            resposta:
                                "Você não se deixou levar pela urgência e encerrou o contato para verificar a situação por um canal oficial.",

                            proximas: []
                        },

                        {
                            texto: "Se é urgente, pode continuar.",

                            pontos: -20,

                            resposta:
                                "A pressão de urgência fez você voltar para uma conversa que ainda não havia sido verificada.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 4 — RECUSA WHATSAPP
        // ==========================================

        {
            texto: "Não vou resolver isso por WhatsApp.",

            pontos: 25,

            resposta:
                "Tudo bem. Mas essa verificação precisa ser realizada rapidamente para evitar que a compra seja aprovada.",

            proximas: [

                {
                    texto: "Vou verificar pelo aplicativo.",

                    pontos: 25,

                    resposta:
                        "Você decidiu utilizar o aplicativo oficial para verificar se a movimentação realmente existia.",

                    proximas: [

                        {
                            texto: "Se houver algo errado, resolvo por lá.",

                            pontos: 30,

                            resposta:
                                "Você manteve todo o processo dentro de um canal oficial e evitou confiar na conversa recebida.",

                            proximas: []
                        },

                        {
                            texto: "Se não achar nada, volto aqui.",

                            pontos: 5,

                            resposta:
                                "Você teve uma atitude cautelosa ao verificar primeiro, embora ainda seja melhor não retornar a um contato que não foi confirmado.",

                            proximas: []
                        }

                    ]
                },

                {
                    texto: "Talvez seja realmente urgente...",

                    pontos: -10,

                    resposta:
                        "Precisamos apenas confirmar algumas informações para bloquear a compra imediatamente.",

                    proximas: [

                        {
                            texto: "Não. Vou procurar o banco por conta própria.",

                            pontos: 30,

                            resposta:
                                "Você percebeu a pressão de urgência e decidiu verificar a situação de forma independente.",

                            proximas: []
                        },

                        {
                            texto: "Tudo bem, pode continuar.",

                            pontos: -30,

                            resposta:
                                "Você mudou uma decisão inicialmente segura por causa da pressão para agir rapidamente.",

                            proximas: []
                        }

                    ]
                }

            ]
        }

    ]

},


    pacote: {

    titulo: "Falso Pacote",

    descricao:
        "Uma suposta transportadora entra em contato informando que existe uma encomenda aguardando confirmação.",

    contato: "Entrega Express",

    avatar: "assets/perfis/pacote.png",

    mensagemInicial: [

        "Olá! Temos uma encomenda em seu nome aguardando confirmação de entrega.",

        "A entrega está temporariamente retida devido a uma pendência no endereço.",

        "Para evitar que a encomenda seja devolvida, precisamos confirmar algumas informações."

    ],

    opcoes: [

        // ==========================================
        // CAMINHO 1 — PERGUNTA QUAL É A ENCOMENDA
        // ==========================================

        {
            texto: "Qual é a encomenda?",

            pontos: 15,

            resposta:
                "É referente a uma compra realizada recentemente. Por segurança, precisamos confirmar alguns dados antes de fornecer mais detalhes.",

            proximas: [

                {
                    texto: "Qual loja enviou a encomenda?",

                    pontos: 15,

                    resposta:
                        "Essa informação aparece apenas após a confirmação dos dados do destinatário.",

                    proximas: [

                        {
                            texto: "Então vou verificar minhas compras primeiro.",

                            pontos: 30,

                            resposta:
                                "Você decidiu verificar se realmente existe alguma compra antes de continuar a conversa.",

                            proximas: []
                        },

                        {
                            texto: "Tudo bem, o que preciso confirmar?",

                            pontos: -20,

                            resposta:
                                "Precisamos validar algumas informações antes de liberar os detalhes da entrega.",

                            proximas: [

                                {
                                    texto: "Não vou informar dados por aqui.",

                                    pontos: 30,

                                    resposta:
                                        "Você interrompeu a conversa antes de fornecer informações e decidiu buscar uma forma independente de verificar a encomenda.",

                                    proximas: []
                                },

                                {
                                    texto: "Pode continuar.",

                                    pontos: -30,

                                    resposta:
                                        "Você decidiu avançar com uma solicitação de informações sem confirmar se a transportadora era legítima.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },

                {
                    texto: "Vou verificar minhas compras primeiro.",

                    pontos: 25,

                    resposta:
                        "Tudo bem, mas precisamos resolver a pendência ainda hoje para evitar que o pacote seja devolvido.",

                    proximas: [

                        {
                            texto: "Mesmo assim, vou verificar antes.",

                            pontos: 30,

                            resposta:
                                "Você não se deixou levar pela pressão e decidiu confirmar a existência da encomenda antes de agir.",

                            proximas: []
                        },

                        {
                            texto: "Se é urgente, pode continuar.",

                            pontos: -20,

                            resposta:
                                "A pressão de urgência fez você continuar uma conversa que ainda não havia sido verificada.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 2 — PEDE UM LINK
        // ==========================================

        {
            texto: "Pode me mandar o link para confirmar.",

            pontos: -25,

            resposta:
                "Podemos encaminhar uma página para confirmar o endereço e liberar a entrega.",

            proximas: [

                {
                    texto: "Vou acessar o link.",

                    pontos: -35,

                    resposta:
                        "A página pede algumas informações para prosseguir com a confirmação.",

                    proximas: [

                        {
                            texto: "Pensando melhor, não vou preencher nada.",

                            pontos: 25,

                            resposta:
                                "Você interrompeu o processo antes de fornecer informações e decidiu buscar a transportadora por conta própria.",

                            proximas: []
                        },

                        {
                            texto: "Tudo bem, vou continuar.",

                            pontos: -35,

                            resposta:
                                "Você decidiu continuar em uma página indicada pelo próprio contato sem verificar sua legitimidade.",

                            proximas: []
                        }

                    ]
                },

                {
                    texto: "Melhor não. Vou procurar a transportadora pelo site oficial.",

                    pontos: 30,

                    resposta:
                        "Você decidiu procurar a empresa por um canal oficial em vez de utilizar uma página enviada pela conversa.",

                    proximas: [

                        {
                            texto: "Vou consultar a encomenda por lá.",

                            pontos: 30,

                            resposta:
                                "Você manteve a verificação dentro de um canal oficial e evitou confiar apenas nas informações recebidas.",

                            proximas: []
                        },

                        {
                            texto: "Se não encontrar nada, volto aqui.",

                            pontos: 5,

                            resposta:
                                "Verificar primeiro foi uma boa decisão, embora ainda seja mais seguro não retornar a um contato que não foi confirmado.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 3 — NÃO ESTÁ ESPERANDO ENCOMENDA
        // ==========================================

        {
            texto: "Eu não estou esperando nenhuma encomenda.",

            pontos: 20,

            resposta:
                "Pode ser uma compra antiga ou um envio feito por outra pessoa. Para evitar a devolução, existe apenas uma pequena taxa de regularização.",

            proximas: [

                {
                    texto: "Não vou pagar uma cobrança inesperada.",

                    pontos: 25,

                    resposta:
                        "Entendo, mas sem a regularização o pacote poderá ser devolvido ao remetente ainda hoje.",

                    proximas: [

                        {
                            texto: "Então deixem devolver. Vou verificar por conta própria.",

                            pontos: 30,

                            resposta:
                                "Você não se deixou pressionar pela possibilidade de perder o pacote e decidiu verificar a situação de forma independente.",

                            proximas: []
                        },

                        {
                            texto: "Quanto é essa taxa?",

                            pontos: -10,

                            resposta:
                                "A cobrança é pequena e precisa ser concluída antes do encerramento da entrega.",

                            proximas: [

                                {
                                    texto: "Não vou pagar sem confirmar a encomenda.",

                                    pontos: 25,

                                    resposta:
                                        "Você interrompeu o pagamento e decidiu confirmar primeiro se a cobrança era legítima.",

                                    proximas: []
                                },

                                {
                                    texto: "Tudo bem, quero resolver isso.",

                                    pontos: -35,

                                    resposta:
                                        "Você decidiu prosseguir com uma cobrança inesperada sem conseguir confirmar a origem da encomenda.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },

                {
                    texto: "Quanto é a taxa?",

                    pontos: -15,

                    resposta:
                        "É um valor pequeno para regularizar a entrega e impedir que a encomenda seja devolvida.",

                    proximas: [

                        {
                            texto: "Antes de pagar, vou verificar com a transportadora.",

                            pontos: 30,

                            resposta:
                                "Você decidiu confirmar a existência da cobrança diretamente com a empresa antes de realizar qualquer pagamento.",

                            proximas: []
                        },

                        {
                            texto: "Se é pouco, posso resolver agora.",

                            pontos: -30,

                            resposta:
                                "O valor baixo da cobrança fez você avançar sem confirmar se a situação era verdadeira.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 4 — VERIFICA COM A TRANSPORTADORA
        // ==========================================

        {
            texto: "Vou verificar diretamente com a transportadora.",

            pontos: 30,

            resposta:
                "Tudo bem. Mas recomendamos resolver rapidamente porque a encomenda está próxima do prazo de devolução.",

            proximas: [

                {
                    texto: "Vou procurar o site oficial da empresa.",

                    pontos: 25,

                    resposta:
                        "Você decidiu buscar o canal oficial da transportadora sem depender das informações enviadas pela conversa.",

                    proximas: [

                        {
                            texto: "Vou consultar a entrega por lá.",

                            pontos: 30,

                            resposta:
                                "Você utilizou uma fonte independente para confirmar se a encomenda realmente existia.",

                            proximas: []
                        },

                        {
                            texto: "Vou pesquisar apenas esse número que me chamou.",

                            pontos: 5,

                            resposta:
                                "Pesquisar o número pode ajudar, mas não substitui a confirmação em um canal oficial da empresa.",

                            proximas: []
                        }

                    ]
                },

                {
                    texto: "Vou pesquisar o número que me mandaram.",

                    pontos: 5,

                    resposta:
                        "Pesquisar pode ajudar, mas resultados online nem sempre confirmam que o contato é realmente oficial.",

                    proximas: [

                        {
                            texto: "Então vou procurar o site oficial da transportadora.",

                            pontos: 25,

                            resposta:
                                "Você decidiu verificar a empresa diretamente por um canal confiável.",

                            proximas: []
                        },

                        {
                            texto: "Se parecer confiável, continuo a conversa.",

                            pontos: -10,

                            resposta:
                                "Você decidiu confiar em uma verificação limitada em vez de confirmar diretamente com a empresa.",

                            proximas: []
                        }

                    ]
                }

            ]
        }

    ]

},
    familiar: { 

    titulo: "Falso Familiar",

    descricao:
        "Uma pessoa entra em contato dizendo ser um familiar usando um número novo.",

    contato: "Número desconhecido",

    avatar: "assets/perfis/familiar.png",

    mensagemInicial: [

        "Oi! Sou eu 😅 Troquei de número e ainda não consegui recuperar meus contatos.",

        "Tô usando esse número novo agora.",

        "Preciso te pedir uma ajuda rápida, consegue falar?"

    ],

    opcoes: [

        // CAMINHO 1
        {
            texto: "Quem é você?",

            pontos: 10,

            resposta:
                "Sou eu 😂 Troquei de celular hoje. Achei que você ia reconhecer pelo jeito que eu falo.",

            proximas: [

                {
                    texto: "Me liga por vídeo então.",

                    pontos: 25,

                    resposta:
                        "Agora não consigo fazer chamada, tô resolvendo umas coisas aqui. É rapidinho.",

                    proximas: [

                        {
                            texto: "Então vou confirmar pelo seu número antigo.",

                            pontos: 30,

                            resposta:
                                "Você decidiu confirmar a identidade por outro canal antes de continuar.",

                            proximas: []
                        },

                        {
                            texto: "Tá bom. O que aconteceu?",

                            pontos: -15,

                            resposta:
                                "Preciso fazer um pagamento hoje, mas meu aplicativo do banco não está funcionando.",

                            proximas: [

                                {
                                    texto: "Antes disso, vou confirmar quem você é.",

                                    pontos: 25,

                                    resposta:
                                        "Você interrompeu a conversa antes de realizar qualquer ação e decidiu confirmar a identidade.",

                                    proximas: []
                                },

                                {
                                    texto: "Quanto você precisa?",

                                    pontos: -30,

                                    resposta:
                                        "Você continuou a conversa mesmo sem conseguir confirmar a identidade da pessoa.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },


                {
                    texto: "Ah tá, achei que fosse golpe 😂",

                    pontos: -5,

                    resposta:
                        "Que isso 😂 sou eu mesmo. Só preciso de uma ajuda rapidinha.",

                    proximas: [

                        {
                            texto: "Que ajuda?",

                            pontos: -10,

                            resposta:
                                "Preciso fazer um pagamento, mas meu aplicativo do banco travou.",

                            proximas: [

                                {
                                    texto: "Me passa os dados do pagamento.",

                                    pontos: -35,

                                    resposta:
                                        "Você aceitou continuar com o pagamento sem confirmar quem realmente estava do outro lado.",

                                    proximas: []
                                },

                                {
                                    texto: "Vou confirmar sua identidade primeiro.",

                                    pontos: 30,

                                    resposta:
                                        "Você decidiu verificar a identidade antes de continuar.",

                                    proximas: []
                                }

                            ]
                        },


                        {
                            texto: "Vou confirmar com você por outro meio.",

                            pontos: 30,

                            resposta:
                                "Você decidiu não confiar apenas nas mensagens recebidas.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // CAMINHO 2
        {
            texto: "Claro, o que aconteceu?",

            pontos: -10,

            resposta:
                "Meu aplicativo do banco travou e preciso fazer um pagamento ainda hoje. Depois eu te devolvo.",

            proximas: [

                {
                    texto: "Quanto você precisa?",

                    pontos: -20,

                    resposta:
                        "Não é muito. Preciso resolver isso agora porque o pagamento vence hoje.",

                    proximas: [

                        {
                            texto: "Me passa os dados do pagamento.",

                            pontos: -40,

                            resposta:
                                "Você estava prestes a realizar um pagamento sem confirmar a identidade da pessoa.",

                            proximas: []
                        },


                        {
                            texto: "Espera. Vou te ligar primeiro.",

                            pontos: 25,

                            resposta:
                                "Você decidiu confirmar a identidade antes de realizar o pagamento.",

                            proximas: []
                        }

                    ]
                },


                {
                    texto: "Por que você não usa seu número antigo?",

                    pontos: 15,

                    resposta:
                        "Perdi acesso a ele quando troquei de celular. Ainda não consegui recuperar.",

                    proximas: [

                        {
                            texto: "Vou ligar para alguém da família e confirmar.",

                            pontos: 30,

                            resposta:
                                "Você utilizou outro meio para verificar a história antes de agir.",

                            proximas: []
                        },


                        {
                            texto: "Entendi. Pode continuar.",

                            pontos: -15,

                            resposta:
                                "A conversa continuou sem que a identidade da pessoa tivesse sido confirmada.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // CAMINHO 3
        {
            texto: "Qual é o meu apelido então?",

            pontos: 20,

            resposta:
                "Ah para 😂 você sabe que eu quase nunca te chamo pelo apelido.",

            proximas: [

                {
                    texto: "Você desviou da pergunta. Vou confirmar por outro contato.",

                    pontos: 30,

                    resposta:
                        "Você percebeu que a pessoa evitou responder algo que poderia ajudar a confirmar sua identidade.",

                    proximas: []
                },


                {
                    texto: "Tá bom, só achei estranho.",

                    pontos: -5,

                    resposta:
                        "Relaxa 😂. Preciso só que você faça um pagamento para mim porque meu aplicativo travou.",

                    proximas: [

                        {
                            texto: "Vou confirmar quem você é primeiro.",

                            pontos: 30,

                            resposta:
                                "Você decidiu confirmar a identidade antes de atender ao pedido.",

                            proximas: []
                        },


                        {
                            texto: "Me passa os dados.",

                            pontos: -35,

                            resposta:
                                "Você continuou com a solicitação mesmo sem confirmar a identidade da pessoa.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // CAMINHO 4
        {
            texto: "Vou ligar para seu número antigo.",

            pontos: 35,

            resposta:
                "Ao entrar em contato pelo número que você já conhecia, você consegue verificar que essa conversa era falsa.",

            proximas: []
        }

    ]


}, 

    emprego: {

    titulo: "Falsa Vaga de Emprego",

    descricao:
        "Um suposto recrutador entra em contato oferecendo uma oportunidade de emprego.",

    contato: "Equipe de Recrutamento",

    avatar: "assets/perfis/emprego.png",

    mensagemInicial: [

        "Olá! Tudo bem? Encontramos seu perfil e acreditamos que você combina com uma oportunidade que estamos oferecendo.",

        "A vaga possui horário flexível e o processo seletivo está sendo realizado de forma online.",

        "Estamos finalizando as inscrições hoje. Você teria interesse em saber mais?"

    ],

    opcoes: [

        // ==========================================
        // CAMINHO 1 — PEDE INFORMAÇÕES
        // ==========================================

        {
            texto: "Qual é a empresa e qual seria a função?",

            pontos: 20,

            resposta:
                "Somos parceiros de diversas empresas e estamos selecionando candidatos para uma função administrativa remota. Os detalhes da empresa são apresentados após o cadastro.",

            proximas: [

                {
                    texto: "Prefiro saber qual é a empresa antes de continuar.",

                    pontos: 25,

                    resposta:
                        "Entendo, mas temos poucas vagas disponíveis e precisamos finalizar os cadastros ainda hoje.",

                    proximas: [

                        {
                            texto: "Sem verificar a empresa, não vou continuar.",

                            pontos: 30,

                            resposta:
                                "Você decidiu não avançar em um processo seletivo sem conseguir verificar quem realmente estava oferecendo a vaga.",

                            proximas: []
                        },

                        {
                            texto: "Tudo bem. Como faço o cadastro?",

                            pontos: -15,

                            resposta:
                                "Para reservar sua participação, é necessário concluir uma etapa de inscrição.",

                            proximas: [

                                {
                                    texto: "Existe algum pagamento para participar?",

                                    pontos: 15,

                                    resposta:
                                        "Existe apenas uma pequena taxa referente ao material necessário para iniciar o treinamento.",

                                    proximas: [

                                        {
                                            texto: "Não vou pagar para participar de um processo que não consegui verificar.",

                                            pontos: 30,

                                            resposta:
                                                "Você interrompeu o processo diante da cobrança e da falta de informações verificáveis.",

                                            proximas: []
                                        },

                                        {
                                            texto: "Tudo bem, quero continuar.",

                                            pontos: -35,

                                            resposta:
                                                "Você decidiu continuar mesmo diante de uma cobrança inesperada e sem conseguir verificar a empresa.",

                                            proximas: []
                                        }

                                    ]
                                },

                                {
                                    texto: "Pode continuar.",

                                    pontos: -20,

                                    resposta:
                                        "O processo avança sem que você tenha confirmado informações importantes sobre a empresa e a vaga.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },


                {
                    texto: "Quanto é o salário?",

                    pontos: -5,

                    resposta:
                        "A remuneração pode chegar a R$ 4.500 por mês, com horários flexíveis e possibilidade de trabalhar de casa.",

                    proximas: [

                        {
                            texto: "Parece bom. O que preciso fazer?",

                            pontos: -20,

                            resposta:
                                "Precisamos concluir seu cadastro hoje para garantir sua participação no processo.",

                            proximas: [

                                {
                                    texto: "Vou pesquisar a empresa e a vaga antes.",

                                    pontos: 30,

                                    resposta:
                                        "Você decidiu verificar a oportunidade de forma independente antes de continuar.",

                                    proximas: []
                                },

                                {
                                    texto: "Pode fazer meu cadastro.",

                                    pontos: -30,

                                    resposta:
                                        "Você avançou no processo motivado pela oferta sem conseguir confirmar sua origem.",

                                    proximas: []
                                }

                            ]
                        },

                        {
                            texto: "Antes disso, quero verificar a empresa.",

                            pontos: 25,

                            resposta:
                                "Você decidiu não avaliar a oportunidade apenas pela remuneração oferecida.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 2 — DEMONSTRA INTERESSE
        // ==========================================

        {
            texto: "Tenho interesse. Como funciona?",

            pontos: -10,

            resposta:
                "Ótimo! O trabalho é remoto e não exige experiência. Você receberá treinamento e poderá começar rapidamente.",

            proximas: [

                {
                    texto: "Não exige experiência nenhuma?",

                    pontos: 10,

                    resposta:
                        "Não. Nosso treinamento ensina tudo. Precisamos apenas de pessoas disponíveis para começar imediatamente.",

                    proximas: [

                        {
                            texto: "Vou procurar informações sobre essa empresa primeiro.",

                            pontos: 30,

                            resposta:
                                "Você decidiu verificar a empresa e a existência da vaga antes de prosseguir.",

                            proximas: []
                        },

                        {
                            texto: "Então quero participar.",

                            pontos: -20,

                            resposta:
                                "Perfeito. Para iniciar, existe uma pequena taxa referente ao material de treinamento.",

                            proximas: [

                                {
                                    texto: "Uma vaga cobrando taxa? Não vou continuar.",

                                    pontos: 30,

                                    resposta:
                                        "Você identificou a cobrança como um importante sinal de alerta e interrompeu o processo.",

                                    proximas: []
                                },

                                {
                                    texto: "Quanto é a taxa?",

                                    pontos: -20,

                                    resposta:
                                        "Você continuou negociando uma cobrança antes de verificar se a oportunidade realmente existia.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },


                {
                    texto: "Onde posso ver o anúncio oficial da vaga?",

                    pontos: 25,

                    resposta:
                        "A oportunidade ainda não foi publicada porque estamos selecionando candidatos diretamente.",

                    proximas: [

                        {
                            texto: "Então vou procurar a empresa pelos canais oficiais.",

                            pontos: 30,

                            resposta:
                                "Você decidiu buscar informações independentemente da conversa recebida.",

                            proximas: []
                        },

                        {
                            texto: "Entendi. Pode me explicar por aqui.",

                            pontos: -15,

                            resposta:
                                "A conversa continua mesmo sem uma fonte independente que confirme a existência da oportunidade.",

                            proximas: []
                        }

                    ]
                }

            ]
        },


        // ==========================================
        // CAMINHO 3 — QUESTIONA A ORIGEM
        // ==========================================

        {
            texto: "Onde vocês encontraram meu perfil?",

            pontos: 20,

            resposta:
                "Seu perfil apareceu em nossa base de candidatos e foi selecionado por possuir características compatíveis com a vaga.",

            proximas: [

                {
                    texto: "Em qual plataforma vocês encontraram?",

                    pontos: 20,

                    resposta:
                        "Trabalhamos com várias plataformas e não consigo consultar essa informação agora.",

                    proximas: [

                        {
                            texto: "Essa resposta está vaga demais. Vou verificar a empresa.",

                            pontos: 30,

                            resposta:
                                "Você percebeu que o recrutador não conseguiu explicar claramente como obteve seu contato.",

                            proximas: []
                        },

                        {
                            texto: "Tudo bem. Me explique a vaga.",

                            pontos: -10,

                            resposta:
                                "A vaga é remota, possui horário flexível e o processo precisa ser concluído ainda hoje.",

                            proximas: [

                                {
                                    texto: "Essa urgência está estranha. Não vou continuar.",

                                    pontos: 25,

                                    resposta:
                                        "Você percebeu a pressão para tomar uma decisão rápida e interrompeu a conversa.",

                                    proximas: []
                                },

                                {
                                    texto: "Certo, quero participar.",

                                    pontos: -30,

                                    resposta:
                                        "Você continuou apesar das informações vagas e da pressão para decidir rapidamente.",

                                    proximas: []
                                }

                            ]
                        }

                    ]
                },

                {
                    texto: "Tudo bem, pode me explicar melhor.",

                    pontos: -5,

                    resposta:
                        "É uma oportunidade remota, com início rápido e treinamento para novos candidatos.",

                    proximas: []
                }

            ]
        },


        // ==========================================
        // CAMINHO 4 — VERIFICAÇÃO DIRETA
        // ==========================================

        {
            texto: "Vou verificar a vaga pelos canais oficiais da empresa.",

            pontos: 35,

            resposta:
                "Você decidiu confirmar a existência da oportunidade por uma fonte independente antes de fornecer informações ou realizar qualquer pagamento.",

            proximas: []
        }

    ]

    }

};


    

