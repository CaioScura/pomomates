# Pomomates

> Temporizador de foco + rede social para estudos.

O **Pomomates** é um aplicativo mobile (iOS e Android) que usa a técnica Pomodoro para ajudar estudantes a manter o foco e a constância. O diferencial é a experiência social: estudar sozinho ou em grupo, registrar o momento de estudo com um check-in com foto e acompanhar o próprio progresso e o dos amigos em um ranking semanal.

## Status

🚧 **Em planejamento.** Fase atual: **Fase 1 — Consolidação do produto.**

| Fase | Descrição | Status |
| --- | --- | --- |
| 1 | Consolidação do produto | Em andamento |
| 2 | Requisitos e regras de negócio | Pendente |
| 3 | Decisões técnicas (ADRs) | Pendente |
| 4 | Prova de conceito técnica | Pendente |
| 5 | Arquitetura | Pendente |
| 6 | Modelagem de dados | Pendente |
| 7 | Contrato da API | Pendente |
| 8 | Planejamento do desenvolvimento | Pendente |
| 9 | Implementação, qualidade e publicação | Pendente |

## Estrutura do repositório

Este repositório é um **monorepo**: documentação, backend e aplicativo ficam juntos, cada um em sua pasta e com suas próprias dependências.

```
pomomates/
├── docs/       Documentação de produto e engenharia
├── backend/    API (NestJS) — a partir da Fase 4
└── mobile/     Aplicativo mobile — protótipo atual em Ionic
```

## Documentação

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

## Stack

| Camada | Tecnologia | Status |
| --- | --- | --- |
| Backend | NestJS + TypeScript | Definido |
| Banco de dados | PostgreSQL + Prisma | Definido |
| Infraestrutura | Supabase (PostgreSQL gerenciado e Storage) | Definido |
| Ambiente | Docker | Definido |
| Documentação da API | Swagger / OpenAPI | Definido |
| Mobile | Ionic, React Native ou Flutter | Em avaliação |

As justificativas de cada escolha ficam registradas nos [ADRs](docs/03-architecture/decisions/).

## Design

- Estudo de caso UX/UI: [Pomomates — Behance](https://www.behance.net/gallery/245096825/Pomomates-Estudo-de-caso-UXUI)

## Como rodar

Instruções serão adicionadas quando o backend e o aplicativo estiverem em desenvolvimento.
