# Our Padi

A clickable prototype of **Our Padi**, a mental wellness app that gives people a safe, judgment-free space to share what's on their mind, find calm, and reach professional support.

**Product design and frontend by Mercy Nubi** · Built with React, TypeScript and Vite.

🔗 **Live demo:** https://mercy-nubi.github.io/Our-Padi/

## What's inside

22 mobile screens across five flows, all linked so you can tap through the app:

| Flow | Screens |
| --- | --- |
| Welcome & onboarding | Splash, Breathe easy, We're here to listen, Your mind your pace |
| Create your account | Username, Create password, Email, Customize avatar, Log in |
| Home & daily care | Home, Mood check-in, Reflection, Breathing exercise, Pal's Library |
| Chat bot & community | Padi AI chat bot, Community feed, Post & replies, Mood insights |
| Therapy, support & profile | Therapy packages, Book a session, Get help now, Profile & privacy |

### Working interactions

- **Username:** live availability check with validation and one-tap suggestions.
- **Password:** typed rule engine (`src/lib/password.ts`) drives a live checklist, a strength meter and a match check; Continue unlocks only when everything passes.
- **Chat bot:** send messages, see a typing indicator, and get supportive replies.
- **Therapy packages:** Children / Individuals / Couples tabs.
- **Navigation:** a shared, typed bottom nav and hash-based routing, so every screen has its own link.

## Design decisions

- **Calm, low-pressure tone:** mint surfaces, rounded shapes, line illustrations and kind, plain copy.
- **Step-by-step sign-up:** a four-step progress bar (username → password → email → avatar).
- **Helpful validation:** a friendly checklist instead of red error blocks.
- **Accessible by default:** real buttons and labelled inputs, `aria-live` feedback, 44px+ touch targets, and a deeper teal on buttons so white text stays readable.
- **Help is always close:** the chat bot and other screens link straight to "Get help now".

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/Our-Padi/
npm run build      # type-check + production build into dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the app and publishes it to GitHub Pages.
In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** once.

If you rename the repo, update `base` in `vite.config.ts` to match.

## Project structure

```
src/
  App.tsx              Routes: gallery at /, each screen at /:slug
  components/          BottomNav, SignupHeader, Gallery, Logo
  lib/screens.ts       Typed registry of every screen and flow
  lib/password.ts      Password rules and strength scoring
  lib/assets.ts        Typed image paths
  screens/             One component per screen
public/images/         Illustrations
```

## To do

- Add the Advanced therapy package's features (`src/screens/Therapy.tsx`).
- Add a verified crisis helpline name and number (`src/screens/Crisis.tsx`).

## Credits

Illustrations and brand belong to Our Padi. This prototype is static: it does not store or send any data.
