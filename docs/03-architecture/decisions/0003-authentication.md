# ADR 0003 — Autenticação com Supabase Auth

**Status:** Aceito
**Data:** 2026-11-15

## Contexto

O MVP precisa de cadastro e login com e-mail e senha (T03, T04). A equipe ainda não decidiu se haverá recuperação de senha, verificação de e-mail ou login social (dúvida D31).

O ADR 0002 já define o Supabase como infraestrutura do banco e do Storage, e o NestJS como responsável pelas regras de negócio.

O desenvolvedor pretende se tornar engenheiro de software com foco em **frontend**. O tempo dedicado a construir infraestrutura de backend genérica compete com o tempo de desenvolvimento do app.

## Decisão

Usar o **Supabase Auth** para cadastro, login e gestão de sessão. O NestJS **não** emite tokens: ele valida o token do Supabase em cada requisição.

**Como funciona:**

1. O app faz cadastro e login direto no Supabase Auth, pelo SDK do Supabase, e recebe um token de acesso (JWT).
2. Toda requisição à API envia esse token no cabeçalho `Authorization: Bearer <token>`.
3. Um guard do NestJS valida o token e identifica o usuário.
4. O Pomomates mantém a própria tabela de perfil (nome, foto, configurações de pomodoro), ligada ao usuário do Supabase pelo mesmo id.

## Alternativas consideradas

| Alternativa | Por que não foi escolhida |
| --- | --- |
| **Autenticação própria no NestJS** (hash de senha, JWT e refresh tokens) | Ensinaria mais sobre autenticação, mas exige mais tempo e concentra o risco de segurança no projeto. Recuperação de senha e verificação de e-mail teriam de ser construídas do zero. O foco do desenvolvedor é o frontend |
| **Supabase Auth por trás da API** (o app só fala com o NestJS, que repassa o login ao Supabase) | Mantém o app falando com um serviço só, mas é a opção mais complexa: soma a integração com o Supabase e os endpoints próprios |

## Consequências

**Positivas**
- Recuperação de senha, verificação de e-mail e login social disponíveis sem desenvolvimento extra, se a equipe decidir usá-los.
- Menos risco de segurança na parte mais sensível do sistema.
- Menos código de backend para manter, e mais tempo para o app.

**Negativas**
- O app fala com dois serviços: o Supabase Auth, para autenticação, e a API, para o resto.
- Mais dependência do Supabase. Trocar de provedor de autenticação no futuro exigiria migrar os usuários.
- É preciso manter a tabela de perfil do Pomomates sincronizada com os usuários do Supabase. A forma de fazer isso será definida na modelagem de dados.
