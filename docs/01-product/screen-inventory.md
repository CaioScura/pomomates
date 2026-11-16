# Inventário de telas

> Levantamento do protótipo do Pomomates no Figma, complementado pelo [estudo de caso UX/UI](https://www.behance.net/gallery/245096825/Pomomates-Estudo-de-caso-UXUI).
> Este documento **descreve** o design.

**Última atualização:** 2026-11-15
**Fase:** 1 — Consolidação do produto

## Legenda

| Marcação | Significado |
| --- | --- |
| **[F]** Figma | Visível diretamente no protótipo |
| **[?]** Não identificável | Não é possível determinar pelo protótipo |
| **[B]** Behance | Informação vinda do estudo de caso, não da tela |

Nas telas, a usuária logada de exemplo é **Helena A.** (avatar "HA") e os dados são fictícios.

---

## Índice

| ID | Tela | Frame(s) no Figma | Módulo |
| --- | --- | --- | --- |
| T01 | Splash | Onboarding (1º) | Boas-vindas |
| T02 | Onboarding | Onboarding (2º ao 4º) | Boas-vindas |
| T03 | Cadastro | Login (1º) | Autenticação |
| T04 | Login | Login (2º) | Autenticação |
| T05 | Home | Home | Home |
| T06 | Menu lateral | Home-sidebar | Home |
| T07 | Iniciar sessão (bottom sheet) | Pop-up, Relatório-grupo (2º) | Pomodoro |
| T08 | Sessão de pomodoro | Pomodoro (3 frames) | Pomodoro |
| T09 | Abandonar pomodoro (popup) | Sair-pomodoro-popup | Pomodoro |
| T10 | Registro de check-in | Check-in (1º) | Check-in |
| T11 | Deletar check-in (popup) | Check-in (2º) | Check-in |
| T12 | Visualizar check-in | Check-in visualizer | Check-in / Feed |
| T13 | Notificações | Notificações | Notificações |
| T14 | Detalhes do grupo | Mais-opcoes-grupo | Grupos |
| T15 | Relatório (ranking) | Relatório, Relatório-opcoes | Relatórios |
| T16 | Chat do grupo | Chat, Chat-opcoes | Chat |
| T17 | Meu perfil | Relatório-grupo (1º) | Perfil |
| T18 | Configurações | Configurações | Configurações |

**Telas citadas, mas não desenhadas:** Novo grupo, Ajuda e feedback, Sobre, Relatório de progresso individual [B], Feed do grupo [B].

---

## Boas-vindas

### T01 — Splash

- **Objetivo** [F]: tela de abertura do app.
- **Elementos** [F]: fundo rosado, mascote (tomate) e o logotipo "pomomates".
- **Navegação** [B]: Splash → Onboarding.
- **Observação** [F]: o frame está rotulado como "Onboarding" no Figma.

### T02 — Onboarding

- **Objetivo** [F]: apresentar a proposta do app em 3 telas.
- **Conteúdo** [F]:

  | Tela | Mascote | Texto | Botões |
  | --- | --- | --- | --- |
  | 1/3 | Tomate sorrindo | "Impulsione seus períodos de foco com Pomomates! Já experimentou fazer pomodoro com amigos?" | Pular · Próximo |
  | 2/3 | Tomate com olhos de estrela | "Faça pomodoro todos os dias para garantir o check-in diário! Não esqueça de registrar com uma foto! ;)" | Pular · Próximo |
  | 3/3 | Dois tomates | "Crie grupos de amigos para alavancarem uma competição saudável, como verdadeiros pomomates!" | Começar! |

- **Elementos** [F]: indicador de página com 3 pontos; botão "Próximo"/"Começar!" verde à direita; "Pular" à esquerda nas telas 1 e 2.
- **Interações** [F]: "Próximo" avança; "Pular" e "Começar!" encerram o onboarding.
- **Navegação** [?]: destino após o onboarding (Cadastro, Login ou Home). No fluxo do Behance, o onboarding leva direto a "Início/meu feed".
- **Regras** [?]: se o onboarding aparece só no primeiro acesso.

---

## Autenticação

### T03 — Cadastro

- **Objetivo** [F]: criar uma conta.
- **Elementos** [F]: título "Cadastrar"; campos Nome, E-mail, Senha e Confirme a senha (senhas com ícone de olho); botão "Criar cadastro"; link "Já tenho uma conta".
- **Navegação** [F]: "Já tenho uma conta" → T04 Login.
- **Regras** [F]: a senha é digitada duas vezes.
- **[?]**: validações (formato do e-mail, força da senha), login social, verificação de e-mail, destino após o cadastro.

### T04 — Login

- **Objetivo** [F]: entrar com e-mail e senha.
- **Elementos** [F]: título "Entrar"; campos E-mail (com ícone de lápis) e Senha (com ícone de olho); botão "Entrar"; link "Novo cadastro".
- **Navegação** [F]: "Novo cadastro" → T03 Cadastro; "Entrar" → T05 Home.
- **[?]**: recuperação de senha (não há "Esqueci minha senha"), login social, função do lápis no campo de e-mail.

---

## Home

### T05 — Home

- **Objetivo** [F]: tela principal, com o resumo do grupo e o feed de check-ins.
- **Elementos** [F]:
  - Cabeçalho: menu (☰), saudação "Bom te ver, Helena!" e sino de notificações.
  - Cartão do grupo "Monitoria & estudo": capa, menu "..." e dois destaques (Marcos, 6 check-ins; Você, 5 check-ins).
  - Seção "Hoje" com itens do feed: miniatura, título, autor e horário (por exemplo, "pomo com a nena!!" · Daniela · 17h43).
  - Barra inferior: **Relatório**, **Iniciar pomodoro** e **Chat**.
- **Interações** [F]: ☰ → T06; sino → T13; item do feed → T12; "Iniciar pomodoro" → T07; "Relatório" → T15; "Chat" → T16.
- **Regras** [F]: os dois destaques do cartão batem com o 1º e o 2º lugar do ranking em T15.
- **[?]**: qual grupo aparece no cartão quando o usuário tem vários; se o feed mostra só o dia atual ("Hoje"); se o feed é de um grupo ou de todos; conteúdo do menu "...".

### T06 — Menu lateral

- **Elementos** [F]:
  - Avatar + "Meu perfil".
  - "Seus grupos": "7ºB Filomena Silva", "Monitoria & estudo" (com foto) e "+ Novo grupo".
  - "Opções": Configurações, Ajuda e feedback, Sobre.
- **Navegação** [F]: Meu perfil → T17; grupo → T14; Configurações → T18.
- **[?]**: telas de Novo grupo, Ajuda e feedback e Sobre; logout (não aparece).

---

## Pomodoro

### T07 — Iniciar sessão (bottom sheet)

- **Objetivo** [F]: escolher entre sessão individual ou em grupo.
- **Onde aparece** [F]: sobre a Home (frame "Pop-up") e sobre Meu perfil (frame "Relatório-grupo").
- **Elementos** [F]: pergunta "Como você quer iniciar sua sessão de pomodoro?"; opções **Sozinho** e **Em grupo** ("Em grupo" selecionada); "Criar sala para o grupo:" com dropdown ("Mentoria & estudo") e ícone de link; botão "Iniciar!".
- **Interações** [F]: "Iniciar!" → T08; o ícone de link copia ou compartilha um convite.
- **[B]**: "Sessões de pomodoro com os amigos" está classificada como de alto impacto e alto esforço.
- **[?]**: como fica o sheet com "Sozinho"; o que é uma "sala"; como os outros membros entram; se a sessão é sincronizada entre os participantes.

### T08 — Sessão de pomodoro

- **Objetivo** [F]: mostrar o timer da sessão em andamento.
- **Estados** [F]:

  | Frame | Ciclo | Timer | Mensagem |
  | --- | --- | --- | --- |
  | 1 | 1 de 2 | 24:59 | "Foco, Helena!" |
  | 2 | 1 de 2 | 04:59 | "Uma pausinha merecida..." |
  | 3 | 2 de 2 | 24:59 | "Falta pouco!" |

- **Elementos** [F]: fundo rosado, indicador de ciclo, contador regressivo, mensagem e "Abandonar pomodoro".
- **Interações** [F]: "Abandonar pomodoro" → T09; ao fim do último ciclo → T10.
- **[F]**: a mensagem muda conforme a fase (foco, pausa, último ciclo).
- **[B]**: técnica com 25 min de foco, pausas curtas e pausa longa depois de 4 ciclos.
- **[?]**: pausar ou retomar; participantes em sessão de grupo; comportamento com o app em segundo plano ou fechado; pausa longa (não aparece).

### T09 — Abandonar pomodoro (popup)

- **Elementos** [F]: overlay sobre T08; texto "Você está indo muito bem! Deseja mesmo abandonar a sessão?"; botões "Não" e "Sim, abandonar" (destacado em vermelho).
- **Interações** [F]: "Não" fecha o popup; "Sim, abandonar" encerra a sessão.
- **Regras** [F]: abandonar exige confirmação.
- **[?]**: destino após abandonar; se a sessão abandonada gera algum registro; impacto em sessões de grupo.

---

## Check-in

### T10 — Registro de check-in

- **Objetivo** [F]: registrar a sessão concluída.
- **Elementos** [F]: título "Pomodoro concluído!"; dropdown "Compartilhar em 2 grupos"; área "Capture uma foto!" (ícone de câmera); campos Título e Descrição; indicador "4x de 25 min."; dropdown de categoria ("Estudo"); botões "Deletar" e "Salvar check-in".
- **Interações** [F]: a área de foto abre a câmera; "Deletar" → T11; "Salvar check-in" publica no feed dos grupos escolhidos.
- **Regras** [F]: um check-in pode ser compartilhado em mais de um grupo.
- **[B]**: o fluxo do usuário diz "Fazer check-in (a foto é opcional)".
- **[?]**: campos obrigatórios; lista de categorias; se dá para escolher foto da galeria; se a duração é editável.
- **Inconsistência** [F]: a sessão de exemplo em T08 tem 2 ciclos, mas o check-in mostra "4x de 25 min.".

### T11 — Deletar check-in (popup)

- **Elementos** [F]: texto "Deseja realmente deletar o check-in? Você perderá o registro do pomodoro!"; botões "Fechar" e "Sim, deletar".
- **Regras** [F]: deletar o check-in apaga o registro do pomodoro.
- **[?]**: se dá para deletar um check-in já salvo ou só durante o registro.

### T12 — Visualizar check-in

- **Elementos** [F]: seta de voltar; foto; autores "Daniela & Neuza" com horário (17h43); título "pomo com a nena :)"; descrição; indicadores "4x de 25 min." e "Estudo"; comentários (Neuza: "BORA!!!"; Marcos: "Brabasss"); campo "Adicione um comentário...".
- **Funcionalidades** [F]: ver e adicionar comentários.
- **[F]**: "Daniela & Neuza" indica que um check-in pode ter mais de um autor, como resultado de uma sessão em grupo.
- **[B]**: "Sistema complexo de likes/reações" e "Reações rápidas (emojis)" ficaram fora da prioridade do MVP.
- **[?]**: editar ou excluir comentário; quem pode comentar.
- **Inconsistência** [F]: o mesmo check-in aparece como "pomo com a nena!!" na Home e "pomo com a nena :)" aqui.

---

## Notificações

### T13 — Notificações

- **Elementos** [F]: seta de voltar; título "Notificações"; estado vazio "Nenhuma notificação encontrada.".
- **[?]**: tipos de notificação, formato dos itens e ações sobre eles. Só o estado vazio foi desenhado.

---

## Grupos

### T14 — Detalhes do grupo

- **Elementos** [F]: título "Monitoria & estudos"; capa; descrição "Grupo dedicado a mentorias de sexta e grupos de estudo!"; botões **Ver relatório** e **Ver chat**; lista "Membros" com "Total de N check-ins" (Você 19, Daniela 18, Diogo 11, Enzo 17, Joice 20, Kauã 9, Marcos 22 e um item cortado).
- **Navegação** [I]: chega pelo menu lateral (T06) ou pelo "..." da Home; "Ver relatório" → T15; "Ver chat" → T16.
- **Regras** [F]: o usuário logado aparece primeiro, como "Você".
- **[F]**: depois de "Você", a lista parece ordenada alfabeticamente; o total parece acumulado (maior que o semanal).
- **[?]**: editar o grupo, convidar, remover, sair do grupo, papéis (admin/membro).

---

## Relatórios

### T15 — Relatório (ranking)

- **Elementos** [F]: título "Relatório"; avatar e nome do usuário; "5 check-ins registrados nesta semana"; seção "Ranking" com "3 dias" (ícone de relógio, em vermelho); lista com posição, avatar, nome e check-ins.
- **Dados** [F]: 1º Marcos (6) · 2º Você (5) · 2º Joice (5) · 3º Enzo (4) · 4º Mirela (3) · 4º Daniela (3) · 5º Diogo (0) · 5º Kauã (0).
- **Regras** [F]: empates dividem a posição sem pular números; membros com 0 check-ins aparecem; o 1º lugar fica em destaque.
- **[B]**: ranking semanal; quem mais registra fotos é o "estudante mais dedicado da semana".
- **[F]**: "3 dias" é o tempo restante para o fim da semana.
- **[?]**: dia de início da semana; critério de desempate na exibição; o que acontece no fechamento da semana.
- **Observação** [F]: "Relatório-opcoes" é idêntico a "Relatório"; nenhuma opção ou filtro é visível.

---

## Chat

### T16 — Chat do grupo

- **Elementos** [F]: título "Chat"; subtítulo "Monitoria & estudo"; estado vazio "Cri, cri, cri... comece mandando uma mensagem!"; campo "Escreva algo..." e botão de enviar.
- **[?]**: aparência das mensagens; anexos; chat fora de grupos.
- **Observação** [F]: "Chat-opcoes" é idêntico a "Chat"; nenhuma opção é visível.

---

## Perfil e configurações

### T17 — Meu perfil

- **Elementos** [F]: título "Meu perfil" e engrenagem; avatar com ícone de lápis; nome; métricas "56 Check-ins diários" e "3.360 min. de pomodoro"; calendário "Seus check-ins" (mês com navegação, dias com check-in mostram a foto); botão "Iniciar pomodoro".
- **Navegação** [B]: engrenagem → T18; [F] "Iniciar pomodoro" → T07.
- **[?]**: significado exato de "Check-ins diários"; cálculo dos minutos; o que acontece ao tocar num dia.
- **Observação** [F]: os dois frames estão rotulados "Relatório-grupo" no Figma; o calendário de exemplo não segue o calendário real de janeiro de 2026.

### T18 — Configurações

- **Elementos** [F]: Nome, E-mail (com lápis), Senha e Confirme a senha (com olho); seção "Configurar tempo de pomodoro" com Ciclos (4), Minutos de foco (25) e Minutos de intervalo (5), todos com "−" e "+"; botão "Salvar alterações".
- **Regras** [F]: a senha nova é confirmada.
- **[?]**: limites dos valores; pausa longa; logout; exclusão de conta; se a configuração vale para sessões em grupo.

---

## Elementos recorrentes

| Elemento | Onde aparece |
| --- | --- |
| Cabeçalho com "<" e título | Quase todas as telas internas |
| Avatar circular com iniciais | Home, Relatório, Detalhes do grupo, Perfil, Check-in |
| Usuário logado como "Você" | Home, Relatório, Detalhes do grupo |
| Botão primário verde | Onboarding, Configurações, T07, T10 |
| Vermelho/rosa para destaque ou ação de risco | 1º do ranking, "3 dias", "Em grupo", "Sim, abandonar", "Sim, deletar" |
| Popup de confirmação com dois botões | T09, T11 |
| Indicador "4x de 25 min." + categoria | T10, T12 |

## Inconsistências encontradas

| # | Inconsistência | Onde |
| --- | --- | --- |
| 1 | Nome do grupo em três formas: "Monitoria & estudo", "Monitoria & estudos", "Mentoria & estudo" | T05, T14, T07, T16 |
| 2 | Frames "Chat-opcoes" e "Relatório-opcoes" idênticos aos originais | T15, T16 |
| 3 | Frames de "Meu perfil" rotulados "Relatório-grupo" | T17 |
| 4 | Sessão com 2 ciclos e check-in com "4x de 25 min." | T08, T10 |
| 5 | Título do mesmo check-in diferente na Home e no visualizador | T05, T12 |
| 6 | Foto "opcional" no fluxo, mas o onboarding pede foto e o ranking conta fotos | T02, T10, [B] |
| 7 | Pausa longa descrita no estudo de caso, mas ausente nas configurações e no timer | T08, T18, [B] |
| 8 | Login e Cadastro ausentes do fluxo do Behance | T03, T04, [B] |
| 9 | "Streak de pomodoros" priorizado no MVP, mas sem tela | [B] |
