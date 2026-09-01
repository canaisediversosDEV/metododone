# MétodoDone: Your Learning Hub

Crie uma aplicação frontend moderna chamada "MétodoDone", funcionando como uma plataforma de Video on Demand (VOD) e Área de Membros (LMS) com identidade visual inspirada na Netflix. Desenvolva a interface utilizando tema escuro (Dark Mode), design responsivo e animações fluidas.




Página Inicial (Dashboard/Vitrine):




Header (Cabeçalho): Insira o logotipo "MétodoDone" à esquerda. À direita, adicione uma barra de pesquisa interativa, um ícone de sininho para notificações e um botão de destaque escrito "Solicitar Aula".

Hero Banner: Crie um banner grande no topo destacando o lançamento da semana, com um botão "Assistir Agora".

Trilhos de Conteúdo (Carrosséis): Organize os vídeos em seções horizontais roláveis com os seguintes títulos: "Aulas Compradas", "Redirecionamento de USB", "Desbloqueios de Conta Google" e "Reparo de IMEI".

Cards de Vídeo: Cada card deve exibir uma miniatura (thumbnail). Adicione um efeito de hover onde o card aumenta levemente (scale) e revela o título da aula e uma breve descrição.

Página da Sala de Aula (Player):




Navegação: Crie uma transição para que, ao clicar em um card de vídeo, o usuário seja direcionado para a rota da sala de aula.

Layout da Sala: Divida a tela em duas partes principais. Coloque uma barra lateral (sidebar) listando os módulos e as aulas disponíveis para navegação. Na área central, posicione um player de vídeo em destaque, acompanhado do título e da descrição da aula logo abaixo.

Interatividade e Dados:




Pesquisa: Programe a barra de pesquisa do cabeçalho para filtrar os cards de vídeo exibidos na tela inicial em tempo real conforme o usuário digita.

Dados Simulados: Utilize arrays de mock data para popular os carrosséis da página inicial e a lista de aulas da barra lateral, permitindo visualizar a aplicação totalmente preenchida e funcional.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://metododone.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e2431a49-bc69-494e-a04f-c2e777ceafe4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
