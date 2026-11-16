# ADR 0002 — Stack do backend: NestJS, PostgreSQL, Prisma e Supabase

**Status:** Aceito
**Data:** 2026-11-15

## Contexto

O Pomomates precisa de uma API própria para concentrar as regras de negócio: sessões, check-ins, grupos e ranking. Mais adiante, também vai precisar de comunicação em tempo real para a sessão em grupo e o chat.

O projeto é o principal portfólio do desenvolvedor responsável pelo backend, que está se especializando em TypeScript. A experiência anterior dele é com Laravel/PHP e MySQL.

O app mobile ainda não foi definido (ver ADR 0004), mas as opções em avaliação usam TypeScript ou se comunicam com a API por HTTP.

## Decisão

| Camada | Escolha | Papel |
| --- | --- | --- |
| Framework | **NestJS + TypeScript** | API REST, regras de negócio e, depois, WebSockets |
| Banco de dados | **PostgreSQL** | Dados relacionais: usuários, grupos, sessões, check-ins |
| Acesso ao banco | **Prisma** | Schema, migrações e consultas tipadas |
| Infraestrutura | **Supabase** | PostgreSQL gerenciado e Storage para as fotos |

**Divisão de responsabilidades com o Supabase:** o Supabase é usado como **infraestrutura** (banco gerenciado e armazenamento de arquivos). As regras de negócio ficam no NestJS. O app conversa com a API, não direto com o banco. Usar ou não o Supabase Auth será decidido no ADR 0003.

## Motivos

- **TypeScript como linguagem principal.** O desenvolvedor está se especializando em TypeScript, e a mesma linguagem no backend e no app dá mais versatilidade e reaproveitamento de conhecimento.
- **Arquitetura modular.** O NestJS organiza o código em módulos, controllers e services, com injeção de dependência. Isso combina com a divisão do Pomomates em domínios (grupos, sessões, check-ins) e é parecido com o Angular, que o desenvolvedor já conhece.
- **Tempo real.** O NestJS tem suporte nativo a WebSockets, necessário para a sessão em grupo e o chat.
- **Mercado.** NestJS e TypeScript são muito usados em vagas de backend Node.
- **Banco relacional.** Os dados do Pomomates são fortemente relacionados (usuários em grupos, check-ins compartilhados em grupos, ranking por grupo), o que favorece um banco relacional.
- **Infraestrutura gerenciada.** O Supabase oferece PostgreSQL e Storage prontos, sem precisar administrar servidores de banco e de arquivos.

## Alternativas consideradas

| Alternativa | Por que não foi escolhida |
| --- | --- |
| **Java + Spring Boot** | Robusto e muito usado no mercado, mas fugiria do foco em TypeScript e não compartilharia a linguagem com o app |
| **Laravel** | É a stack que o desenvolvedor já domina, o que traria mais velocidade. Mas o objetivo do projeto também é crescer em TypeScript |
| **Express ou Fastify puros** | Mais leves, mas sem estrutura definida. Cada decisão de organização teria de ser tomada do zero |
| **Só Supabase, sem backend próprio (BaaS)** | Mais rápido no início, mas espalharia as regras de negócio entre o app e o banco, e o desenvolvedor não praticaria a construção de uma API |
| **MySQL** | Conhecido pelo desenvolvedor, mas o Supabase é baseado em PostgreSQL |

## Consequências

**Positivas**
- Uma linguagem só (TypeScript) na API e, possivelmente, no app.
- Código organizado por domínio desde o início.
- Documentação da API gerada automaticamente com Swagger, a partir do código.
- Sem servidor de banco ou de arquivos para administrar.

**Negativas**
- **Curva de aprendizado.** O desenvolvedor não tem experiência com NestJS, Prisma e Supabase, e o risco é estruturar o projeto de forma inadequada. **Mitigação:** uma prova de conceito técnica (Fase 4) antes de definir a arquitetura, e seguir as convenções da documentação oficial do NestJS.
- O início vai ser mais lento do que seria com Laravel.
- Dependência do Supabase para banco e arquivos. Como o acesso ao banco passa pelo Prisma e o banco é PostgreSQL padrão, uma migração futura para outro provedor é viável.
