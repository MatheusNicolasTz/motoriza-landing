# Motoriza — Landing

Landing page do app **Motoriza**, feita em **Vite + React + Tailwind**, com login via **Firebase Auth** (mesma conta do app mobile).

## Rodando

```bash
cd landing
npm install
cp .env.example .env.local   # preencha com as MESMAS credenciais Firebase do mobile
npm run dev
```

Abre em http://localhost:5173.

## Estrutura

```
src/
  App.jsx                 # rotas (/, /blog, /login)
  main.jsx                # bootstrap React
  index.css               # Tailwind + tema
  pages/
    Home.jsx              # Navbar + Hero + Features + CTA + Footer
    Blog.jsx
    Login.jsx             # Firebase Auth (email/senha + Google)
  sections/
    Hero.jsx
    Features.jsx
    CTA.jsx
  components/
    Navbar.jsx
    Footer.jsx
    StoreBadge.jsx        # botão App Store / Google Play
    PhoneMockup.jsx       # carcaça de celular
    phone-screens/
      DashboardScreen.jsx # print do app: gastos do veículo
      MaintenanceScreen.jsx # print do app: lembretes de manutenção
  data/
    features.js           # lista de features do app
  lib/
    firebase.js           # init do Firebase Web SDK
```

## Login compartilhado com o mobile

O Firebase Auth é centralizado por **projeto Firebase**. Use o mesmo
`projectId`/`apiKey` do app mobile no `.env.local` para que as contas
sejam as mesmas no PC e no celular.

## Links das stores

Edite o `href` nos `<StoreBadge />` (Navbar, Hero, CTA) quando os apps forem publicados.
