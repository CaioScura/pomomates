<h1>
  <img src="mobile/src/assets/img/tomatinho2.svg" width="40" alt="Logo Pomomates" align="top">
  POMOMATES
</h1>

> Temporizador de foco + rede social para estudos.

O **Pomomates** é um app que atua como um temporizador de foco, com ênfase em tempo de estudo, ajudando a evitar desvios de atenção durante tarefas atuando como um temporizador pomodoro.
Além disso, é onde os usuários compartilham entre si fotos tiradas do seu período de foco em tempo real, dentro de um grupo pré-formado de amigos!

## ✨ Funcionalidades

### ⏱️ Temporizador Pomodoro
Tempos de foco e pausa baseados na técnica Pomodoro para maximizar a sua produtividade nos estudos.

### 👥 Grupos de Amigos
Crie ou entre em grupos para estudar junto com seus amigos.

### 📸 Compartilhamento de fotos
Tire e compartilhe fotos do seu ambiente de estudo com seus amigos do grupo.

### 🥇 Ranking semanal
Quem mais registra seus momentos de estudo é condecorado como o estudante mais dedicado da semana.

### 🏆 Relatório geral de desempenho
Acompanhe seu histórico de sessões e veja sua evolução ao longo do tempo.

### 🎮 Interface gamificada
Experiência visual agradável para tornar o estudo mais engajante.

## 🚧 Status

**Em planejamento.** Fase atual: **Fase 1 — Consolidação do produto.**

| Fase | Descrição | Status |
| --- | --- | --- |
| 1 | Consolidação do produto | 🔄 Em andamento |
| 2 | Requisitos e regras de negócio | ⏳ Pendente |
| 3 | Decisões técnicas (ADRs) | ⏳ Pendente |
| 4 | Prova de conceito técnica | ⏳ Pendente |
| 5 | Arquitetura | ⏳ Pendente |
| 6 | Modelagem de dados | ⏳ Pendente |
| 7 | Contrato da API | ⏳ Pendente |
| 8 | Planejamento do desenvolvimento | ⏳ Pendente |
| 9 | Implementação, qualidade e publicação | ⏳ Pendente |

## 📁 Estrutura do repositório

Este repositório é um **monorepo**: documentação, backend e aplicativo ficam juntos, cada um em sua pasta e com suas próprias dependências.

```
pomomates/
├── docs/       Documentação de produto e engenharia
├── backend/    API (NestJS) — a partir da Fase 4
└── mobile/     Aplicativo mobile — protótipo atual em Ionic
```

## 📚 Documentação

Toda a documentação do projeto fica em [`docs/`](docs/) e é versionada junto com o código.

| Pasta | Conteúdo |
| --- | --- |
| [`01-product`](docs/01-product/) | Visão do produto, pesquisa de UX, inventário de telas, fluxos e glossário |
| [`02-requirements`](docs/02-requirements/) | Requisitos funcionais e não funcionais, regras de negócio e histórias de usuário |
| [`03-architecture`](docs/03-architecture/) | Arquitetura, módulos e registros de decisão ([ADRs](docs/03-architecture/decisions/)) |
| [`04-database`](docs/04-database/) | Modelo de dados e diagrama entidade-relacionamento |
| [`05-api`](docs/05-api/) | Padrões e contrato da API (OpenAPI) |
| [`06-security`](docs/06-security/) | Plano de segurança |
| [`07-testing`](docs/07-testing/) | Estratégia de testes |
| [`08-deployment`](docs/08-deployment/) | Guia de publicação e operação |

## 🛠 Tecnologias

### Backend (planejado)
- NestJS + TypeScript
- PostgreSQL + Prisma
- Supabase (PostgreSQL gerenciado e Storage)
- Docker
- Swagger / OpenAPI

### Mobile (protótipo atual — stack final em avaliação)
- Angular 20
- Ionic Framework 8
- Capacitor 8
- TypeScript
- HTML5
- SCSS

As justificativas de cada escolha ficam registradas nos [ADRs](docs/03-architecture/decisions/).

## 🎨 Design

- Estudo de caso UX/UI: [Pomomates — Behance](https://www.behance.net/gallery/245096825/Pomomates-Estudo-de-caso-UXUI)

## 📋 Pré-requisitos
O que precisa ser instalado para rodar o protótipo mobile:
- [Node.js](https://nodejs.org/) >= 20.9 (LTS) ou >= 22
- [Angular CLI](https://angular.dev/tools/cli) >= 20 — `npm install -g @angular/cli`
- [Ionic CLI](https://ionicframework.com/docs/cli) >= 7 — `npm install -g @ionic/cli`

## 📦 Instalação

```bash
git clone https://github.com/CaioScura/pomomates.git

cd pomomates/mobile

npm install
```

## 🚀 Executando o projeto

```bash
ionic serve
```

Acesse no navegador: `http://localhost:8100/welcome`

> As instruções do backend serão adicionadas a partir da Fase 4.

## 👨‍💻 Equipe

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/CaioScura">
        <img src="https://github.com/CaioScura.png" width="100px;" alt="Caio Scura"/>
        <br />
        <sub><b>Caio Scura</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/legumignosis">
        <img src="https://github.com/legumignosis.png" width="100px;" alt="Megumi Akyama"/>
        <br />
        <sub><b>Megumi Akyama</b></sub>
      </a>
    </td>
  </tr>
</table>
