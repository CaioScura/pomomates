# ADR 0004 — Frontend mobile com React Native e Expo

**Status:** Aceito
**Data:** 2026-11-15

## Contexto

O Pomomates é um app para iOS e Android. Para o MVP, ele precisa de câmera (check-in com foto), notificações (fim do foco e do intervalo), timer que funcione com o app em segundo plano e integração com o Supabase Auth (ADR 0003).

Já existe um protótipo em **Ionic + Angular + Capacitor**, com as telas de onboarding, cadastro, login, home, notificações e menu lateral, ainda sem integração com backend.

O desenvolvedor responsável pelo app tem foco de carreira em **frontend** e se especializa em **TypeScript**. Ele já usou React em projetos com Next.js.

## Decisão

Desenvolver o app com **React Native + Expo**, em TypeScript.

O protótipo em Ionic fica preservado na tag `ionic-prototype-v0` e será substituído em `mobile/` quando o projeto React Native for criado.

## Motivos

- **Carreira em frontend.** React é a biblioteca de frontend mais pedida no mercado, e o React Native reaproveita esse conhecimento. O que se aprende no app vale para a web (Next.js), e vice-versa.
- **TypeScript.** Mantém a mesma linguagem do backend (ADR 0002).
- **Experiência anterior com React** em projetos Next.js.
- **Componentes nativos**, com aparência e desempenho mais próximos de um app nativo do que uma WebView.
- **Expo.** Simplifica configuração, build, publicação nas lojas e notificações push (Expo Notifications), além de oferecer bibliotecas prontas para câmera e notificações locais.

## Alternativas consideradas

| Alternativa | Por que não foi escolhida |
| --- | --- |
| **Ionic + Angular + Capacitor** | Aproveitaria as telas já prontas e o conhecimento de Angular. Mas roda numa WebView e direciona a carreira para Angular, enquanto o objetivo é React |
| **Flutter** | Bom desempenho e componentes próprios, mas usa Dart, uma linguagem fora da especialização em TypeScript |

As três opções atendem às necessidades técnicas do MVP. A decisão foi tomada pelo alinhamento com a carreira e com a stack do projeto.

## Consequências

**Positivas**
- TypeScript em todo o projeto: app e API.
- Conhecimento reaproveitável entre web e mobile.
- Expo reduz o trabalho de configuração e de publicação.

**Negativas**
- As telas já feitas no Ionic precisam ser refeitas. Como são só interface, sem regras de negócio nem integração, o retrabalho é pequeno e serve de prática na nova stack.
- Curva de aprendizado de React Native e Expo: navegação, componentes nativos, build para iOS e Android.
- O timer em segundo plano precisa ser implementado com notificações locais agendadas e cálculo pelo horário de término, não com código rodando continuamente. Isso vale para qualquer framework mobile.
