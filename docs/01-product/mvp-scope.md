# Escopo do MVP

> O que entra na primeira versão do Pomomates e o que fica para depois.
> Os IDs de tela (T01, T02...) seguem o [inventário de telas](screen-inventory.md). Os IDs de dúvida (D01, D02...) seguem a lista de dúvidas da equipe.

**Última atualização:** 2026-11-15
**Fase:** 1 — Consolidação do produto
**Status:** ⚠️ Proposta. Depende das respostas da equipe às dúvidas marcadas.

## Objetivo do MVP(Produto Mínimo Viável)

Validar a hipótese central do estudo de caso: **estudar com amigos, registrar o momento com um check-in e competir num ranking semanal ajuda o estudante a manter a constância.**

O MVP é a menor versão do app que permite testar isso com um grupo real de usuários. Tudo que não contribui diretamente para essa hipótese fica para depois.

## Ciclo central

Este é o caminho que o MVP precisa entregar de ponta a ponta:

1. O usuário cria uma conta e entra (ou é convidado) em um grupo de amigos.
2. Inicia uma sessão de pomodoro.
3. Conclui a sessão e registra um check-in com foto.
4. O check-in aparece no feed do grupo, onde os amigos podem comentar.
5. O check-in conta no ranking semanal do grupo.

## Classificação

| Classe | Significado |
| --- | --- |
| ✅ **MVP** | Entra na primeira versão |
| 🔜 **Pós-MVP** | Logo depois do MVP, assim que o ciclo central estiver funcionando |
| 💡 **Futuro** | Ideia válida, sem data |
| ❓ **A decidir** | Depende da resposta da equipe |
| ❌ **Fora do escopo** | Não faz parte do produto |

## Funcionalidades

### ✅ MVP

| Funcionalidade | Telas | Depende de |
| --- | --- | --- |
| Splash e onboarding | T01, T02 | — |
| Cadastro e login com e-mail e senha | T03, T04 | D31 |
| Criar grupo, entrar em grupo e ver membros | T06, T14, "Novo grupo" | D11, D12, D29 |
| Sessão de pomodoro individual (foco, intervalo, ciclos) | T07, T08 | D10 |
| Abandonar sessão com confirmação | T09 | D08 |
| Configurar tempos de pomodoro | T18 | D30 |
| Registrar check-in com foto, título, descrição e categoria | T10, T11 | D01, D20, D21 |
| Compartilhar check-in em um ou mais grupos | T10 | D15 |
| Feed de check-ins na Home | T05 | D13 |
| Visualizar check-in e comentar | T12 | D23 |
| Ranking semanal do grupo | T15 | D02, D03, D04 |
| Perfil com métricas e calendário de check-ins | T17 | D18 |
| Editar dados da conta (nome, e-mail, senha) | T18 | D30 |

### ❓ A decidir

| Funcionalidade | Telas | Recomendação | Depende de |
| --- | --- | --- | --- |
| **Sessão em grupo (sala)** | T07 | Pós-MVP. Veja a nota abaixo | D05, D06, D07, D09 |
| Streak de pomodoros | — | MVP, se a equipe confirmar. É barato de calcular a partir dos check-ins | D17 |
| Feed do grupo e relatório de progresso como telas separadas | — | Depende de serem telas novas ou as que já existem | D16, D27 |

### 🔜 Pós-MVP

| Funcionalidade | Telas | Motivo |
| --- | --- | --- |
| Chat do grupo | T16 | Exige comunicação em tempo real. Os comentários do check-in já cobrem a interação mínima |
| Notificações push | T13 | Exige integração com o serviço de push. Os eventos ainda não estão definidos (D24) |
| Ajuda e feedback, Sobre | T06 | Telas simples, mas não fazem parte do ciclo central |

### 💡 Futuro

Itens que o estudo de caso classificou como baixo impacto ou alto esforço:

- IA para relatório de progresso e recomendações de estudo
- Ranking global
- Reações rápidas (emojis), likes e reações complexas
- Badges visuais
- Personalização do mascote
- Moderação, denúncia e bloqueio (D42)

## Nota sobre a sessão em grupo

A sessão em grupo é o item que mais pesa na decisão do MVP:

- **A favor de incluir:** "Pomodoro com amigos" é parte central da proposta, aparece no onboarding e tem destaque em T07.
- **Detalhe:** Esperar até que todos os mebros deem o start de iniciar o Pomodoro, caso não tenha todos os membros selecionados do grupo como start, os demais ficam no aguardo.

**Recomendação:** lançar o MVP com a sessão individual e o lado social pelos grupos (feed, comentários e ranking). A sessão em grupo entra logo depois, já com o ciclo central validado e com a experiência da prova de conceito técnica.

Assim, os amigos já estudam "juntos" no MVP: cada um faz a sua sessão e todos veem os check-ins uns dos outros e competem no ranking. A opção "Em grupo" em T07 fica oculta até a sala existir.

