# Glossário do domínio

> A linguagem comum do Pomomates. Todos usam os mesmos termos, com o mesmo significado, na conversa com a equipe, na documentação, no banco de dados e no código.
> Os IDs de tela (T01, T02...) seguem o [inventário de telas](screen-inventory.md).

**Última atualização:** 2026-11-15
**Fase:** 1 — Consolidação do produto

## Como usar este documento

- **Termo:** como aparece na interface e na conversa com a equipe.
- **No código:** nome da entidade ou do conceito no código, no banco e na API (em inglês).
- **Status:**
  - ✅ **Claro:** o significado está evidente no protótipo ou no estudo de caso.
  - ⚠️ **A confirmar:** a definição é uma proposta e precisa ser validada com a equipe.

Quando um termo for confirmado, mudado ou criado, este arquivo é atualizado no mesmo commit.

---

## Pessoas e grupos

| Termo | No código | Definição | Status |
| --- | --- | --- | --- |
| **Usuário** | `User` | Pessoa com conta no Pomomates. Tem nome, e-mail, senha e foto de perfil. | ✅ |
| **Pomomate** | — | Nome carinhoso dos usuários e do mascote, usado em textos do app ("como verdadeiros pomomates!"). Não é uma entidade do sistema. | ✅ |
| **Grupo** | `Group` | Conjunto de usuários que estudam juntos, compartilham check-ins e competem no ranking. Tem nome, descrição e capa (T14). | ✅ |
| **Membro** | `GroupMember` | Vínculo entre um usuário e um grupo. Um usuário pode participar de vários grupos (T06). | ✅ |
| **Você** | — | Forma como o usuário logado aparece em listas e no ranking. É só uma convenção da interface. | ✅ |

## Sessão de pomodoro

| Termo | No código | Definição | Status |
| --- | --- | --- | --- |
| **Pomodoro** | — | Técnica de estudo que alterna períodos de foco e pausa. No app, a palavra também é usada como sinônimo de sessão ("Iniciar pomodoro"). | ✅ |
| **Sessão** | `StudySession` | Uma execução completa do timer, do "Iniciar!" (T07) até a conclusão ou o abandono. É formada por um ou mais ciclos. | ✅ |
| **Ciclo** | `cycle` | Um período de foco seguido de uma pausa. A sessão mostra o progresso como "1 de 2", "2 de 2" (T08). | ✅ |
| **Foco** | `focus` | Parte do ciclo dedicada ao estudo. Padrão: 25 minutos (T18). | ✅ |
| **Intervalo** (pausa) | `break` | Parte do ciclo dedicada ao descanso. Padrão: 5 minutos (T18). A interface usa "intervalo" nas configurações e "pausinha" no timer. | ✅ |
| **Pausa longa** | `longBreak` | Pausa maior depois de um número de ciclos (4, pela técnica). Aparece no estudo de caso, mas não no protótipo. | ⚠️ |
| **Configuração de pomodoro** | `PomodoroSettings` | Preferências do usuário para as sessões: número de ciclos, minutos de foco e minutos de intervalo (T18). | ✅ |
| **Sessão individual** | `mode: SOLO` | Sessão feita sozinho ("Sozinho", em T07). | ✅ |
| **Sessão em grupo** | `mode: GROUP` | Sessão feita junto com membros de um grupo ("Em grupo", em T07). | ✅ |
| **Sala** | `StudyRoom` | Espaço que reúne os participantes de uma sessão em grupo ("Criar sala para o grupo", em T07). Ainda não se sabe como os membros entram nem se o timer é sincronizado entre eles. | ⚠️ |
| **Participante** | `SessionParticipant` | Usuário que está numa sessão. Numa sessão em grupo, pode haver vários. | ⚠️ |
| **Sessão concluída** | `status: COMPLETED` | Sessão em que todos os ciclos chegaram ao fim. Leva ao registro de check-in (T10). | ✅ |
| **Sessão abandonada** | `status: ABANDONED` | Sessão encerrada pelo usuário antes do fim, depois da confirmação (T09). | ✅ |

## Check-in e feed

| Termo | No código | Definição | Status |
| --- | --- | --- | --- |
| **Check-in** | `CheckIn` | Registro de uma sessão concluída, feito em "Pomodoro concluído!" (T10). Tem foto, título, descrição, duração e categoria, e é publicado nos grupos escolhidos. | ✅ |
| **Foto do check-in** | `photoUrl` | Imagem do momento de estudo. O fluxo do Behance diz que é opcional, mas o onboarding pede a foto e o ranking conta fotos. | ⚠️ |
| **Duração** | — | Resumo do tempo da sessão, exibido como "4x de 25 min." (ciclos × minutos de foco). | ✅ |
| **Categoria** | `category` | Classificação do check-in, como "Estudo". A lista completa de categorias não aparece. | ⚠️ |
| **Compartilhar** | `CheckInShare` | Publicar um check-in em um ou mais grupos ("Compartilhar em 2 grupos", em T10). | ✅ |
| **Autores do check-in** | — | Usuários que assinam o check-in. Pode haver mais de um ("Daniela & Neuza", em T12), provavelmente vindo de uma sessão em grupo. | ⚠️ |
| **Feed** | — | Lista de check-ins exibida na Home, agrupada por dia ("Hoje", em T05). Não se sabe se mostra um grupo ou todos. | ⚠️ |
| **Comentário** | `Comment` | Texto deixado por um usuário em um check-in (T12). | ✅ |

## Ranking, relatórios e perfil

| Termo | No código | Definição | Status |
| --- | --- | --- | --- |
| **Ranking semanal** | `ranking` | Classificação dos membros de um grupo pelo número de check-ins na semana (T15). O 1º lugar é o "estudante mais dedicado da semana". | ✅ |
| **Semana** (período do ranking) | `week` | Intervalo usado para contar os check-ins do ranking. O dia de início e o fuso horário ainda não foram definidos. | ⚠️ |
| **Posição** | `position` | Lugar do membro no ranking. Empates dividem a mesma posição, sem pular números (T15). | ✅ |
| **Relatório** | — | Tela com os check-ins da semana do usuário e o ranking do grupo (T15). | ✅ |
| **Relatório de progresso** | — | Citado no estudo de caso como item do menu lateral. Ainda não foi identificado no protótipo. | ⚠️ |
| **Total de check-ins** | — | Quantidade acumulada de check-ins de um membro, exibida em Detalhes do grupo (T14). Não se sabe se conta só aquele grupo ou o app inteiro. | ⚠️ |
| **Check-ins diários** | — | Métrica do perfil (T17). O significado ainda não está definido: total de check-ins, dias com check-in ou sequência de dias. | ⚠️ |
| **Minutos de pomodoro** | — | Total de minutos de foco do usuário (T17). | ⚠️ |
| **Streak** | `streak` | Sequência de dias seguidos com pelo menos um check-in. Está no MVP do estudo de caso, mas não tem tela. | ⚠️ |

## Comunicação

| Termo | No código | Definição | Status |
| --- | --- | --- | --- |
| **Chat** | `Message` | Conversa por mensagens de texto entre os membros de um grupo (T16). | ✅ |
| **Notificação** | `Notification` | Aviso enviado ao usuário sobre algo que aconteceu no app (T13). Os tipos ainda não foram definidos. | ⚠️ |

---

## Termos a evitar

Para manter a linguagem consistente, use sempre o termo da esquerda.

| Use | Evite | Motivo |
| --- | --- | --- |
| Sessão | Pomodoro (no sentido de execução), timer | "Pomodoro" é a técnica; "sessão" é cada execução dela. |
| Intervalo | Pausa, descanso | "Intervalo" é o termo das configurações (T18). |
| Check-in | Post, publicação, registro | "Check-in" é o termo usado em todo o protótipo. |
| Membro | Participante (no contexto do grupo) | "Participante" fica reservado para quem está numa sessão. |
