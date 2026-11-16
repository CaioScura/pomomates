# ADR 0001 — Monorepo para documentação, backend e mobile

**Status:** Aceito
**Data:** 2026-11-15

## Contexto

O Pomomates tem três partes: a documentação, a API (backend) e o aplicativo mobile. A equipe é pequena e a mesma pessoa vai trabalhar em mais de uma parte.

Já existia um repositório com um protótipo do app em Ionic, na raiz.

## Decisão

Usar **um único repositório** (monorepo), com uma pasta para cada parte:

```
pomomates/
├── docs/       documentação de produto e engenharia
├── backend/    API
└── mobile/     aplicativo
```

Cada pasta é um projeto independente, com as próprias dependências (`package.json`) e configurações. **Não** usaremos ferramentas de monorepo (Turborepo, Nx) por enquanto.

O protótipo em Ionic foi movido para `mobile/` com `git mv`, preservando o histórico. O estado anterior à reorganização está marcado com a tag `ionic-prototype-v0`.

## Alternativas consideradas

| Alternativa | Por que não foi escolhida |
| --- | --- |
| **Um repositório por parte** (docs, backend e mobile separados) | Três lugares para issues, histórico e configuração. Uma mudança que afeta API e app vira dois PRs que precisam ser coordenados |
| **Monorepo com Turborepo ou Nx** | Traz cache de build e pacotes compartilhados, mas adiciona uma camada de configuração que o projeto ainda não precisa |
| **Criar um repositório novo** | Perderia o histórico do protótipo em Ionic |

## Consequências

**Positivas**
- A documentação fica ao lado do código. Uma mudança de regra atualiza a documentação e o código no mesmo commit.
- Um único lugar para issues, histórico e quadro de tarefas.
- O contrato da API fica visível para quem trabalha no backend e no app.
- Quem visita o repositório vê o projeto inteiro num só link.

**Negativas**
- O CI precisa ser configurado para rodar só o que mudou, filtrando por pasta.
- Se backend e app passarem a ter equipes ou ritmos de deploy muito diferentes, pode ser preciso separar os repositórios no futuro.
