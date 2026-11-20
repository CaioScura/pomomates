# Aprendizados da prova de conceito


**Data:** 2026-11-19
**Fase:** 4 — Prova de conceito

## Objetivo

Responder a uma pergunta antes de desenhar a arquitetura: **a stack escolhida nos ADRs 0002 e 0003 funciona junta, e o desenvolvedor sabe montá-la?**

**Critério de pronto:** chamar `GET /me` com o token de um usuário do Supabase Auth e receber o perfil dele, lido do banco pelo Prisma.

**Resultado:** ✅ cumprido.

## O que foi construído

| Peça | Como ficou |
| --- | --- |
| API | NestJS 12, ESM, testes com Vitest |
| Banco | PostgreSQL no Supabase, acessado com Prisma 7 e o adaptador `@prisma/adapter-pg` |
| Conexões | Pooler em modo transação para a API (`DATABASE_URL`) e em modo sessão para as migrations (`DIRECT_URL`) |
| Tabela | `profiles`, com o mesmo id do usuário do Supabase Auth e RLS ativado |
| Autenticação | Guard próprio que valida o token do Supabase pelas chaves públicas (JWKS), com a biblioteca `jose` |
| Endpoints | `GET /health` e `GET /me` (protegido) |
| Documentação | Swagger em `/docs`, gerado a partir do código |
| Ferramentas de desenvolvimento | `npm run token` (gera um token de teste) e `.env.example` |

## O que funcionou bem

- **A divisão de responsabilidades do ADR 0003.** O Supabase cuida do login, e o NestJS só confere o token, localmente, sem chamar o Supabase a cada requisição.
- **Prisma + Supabase.** Depois de configuradas as duas conexões, o fluxo controller → service → Prisma → banco funcionou sem surpresas.
- **Swagger.** A documentação sai do código e já serve para testar os endpoints protegidos, com o botão Authorize.
- **Injeção de dependência nos testes.** Trocar o `PrismaService` por um mock deixa os testes unitários independentes do banco.

## O que deu trabalho

| Problema | Causa | Lição |
| --- | --- | --- |
| Rota respondendo `404` | Controller ou módulo não registrado no `@Module` | O Nest só enxerga o que está ligado a partir do `AppModule`. O `import` no topo do arquivo é do TypeScript e não registra nada |
| Versão do Prisma | A tag `latest` aponta para uma versão 8 de pré-lançamento | Fixar a versão principal das dependências críticas (`prisma@7`) |
| Mudanças do Prisma 7 | Arquivo de configuração próprio e adaptador de banco obrigatório | Tutoriais antigos não valem; seguir a documentação oficial da versão em uso |
| Imports em ESM | Imports relativos terminam em `.js`, mesmo em arquivos `.ts` | É o caminho do arquivo depois de compilado |
| Testar endpoint protegido | Sem app, é preciso simular o login para obter um token | Um script de desenvolvimento (`npm run token`) e o Swagger resolveram |

## O que muda nas próximas fases

**Arquitetura (Fase 5)**
- **Cada funcionalidade é um módulo** (grupos, sessões, check-ins), no padrão module/controller/service usado em `profiles`.
- **`PrismaModule` e `ConfigModule` ficam globais**, porque todo o app usa os dois.
- **Proteger por padrão.** Hoje cada controller precisa do `@UseGuards`. Como quase toda a API vai exigir login, vale avaliar um guard global, com um marcador para as poucas rotas públicas (como `/health`). Esquecer o guard num controller novo deixaria a rota aberta.
- **Criar o perfil automaticamente.** Hoje o perfil é criado à mão. A arquitetura precisa definir quando isso acontece: no primeiro `GET /me` ou no cadastro.

**Banco de dados (Fase 6)**
- **Toda tabela nova precisa de RLS ativado na migration**, para não ficar exposta pela API pública do Supabase.
- **Convenção de nomes:** camelCase no código e snake_case no banco, com `@map` e `@@map`.
- Os ids dos usuários são **UUIDs vindos do Supabase Auth**.

**Infraestrutura**
- **Região do Supabase:** o projeto foi criado em `us-east-1` (Estados Unidos). Antes de ter dados reais, criar o projeto definitivo em `sa-east-1` (São Paulo).
- **Projeto pausado:** no plano gratuito, o projeto pausa depois de 7 dias sem uso. Considerar isso para a demonstração no portfólio.
- **Swagger em produção:** decidir se `/docs` fica público ou só em desenvolvimento.

## Pendências técnicas

- [ ] Testes de comportamento (não só "should be defined"), como `404` quando o perfil não existe e `401` sem token
- [ ] Remover o `AppController` e o `AppService` de exemplo (`GET /` "Hello World!")
- [ ] Validação dos dados de entrada (DTOs), quando surgirem os primeiros endpoints que recebem dados
