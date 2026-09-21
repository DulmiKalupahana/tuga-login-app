# Tuga Login App — Software Engineering Intern Assessment (Full Stack)

Assessment for code3x — Software Engineering Intern (Full Stack). Implements the login page from the provided Figma reference with a focus on layout accuracy and responsiveness.

## Live Demo & Repository

- **Live URL:** https://tuga-login-app-70d37.web.app
- **GitHub Repo:** https://github.com/DulmiKalupahana/tuga-login-app

## Tech Stack

- React 19
- Vite
- TypeScript
- Material UI (MUI) — components and styling via `sx`
- Firebase Authentication (Google) & Firebase Hosting

## Features

- Pixel-detailed UI based on the Figma reference — split-screen layout, Poppins typography, rounded inputs and black action buttons.
- Mobile responsive layout with MUI Grid and breakpoints — hero panel hidden on mobile, side-by-side on desktop.
- Client-side input validation — required fields, email format check, password length, inline errors with `helperText` and dynamic clear on typing.
- Firebase Google Authentication — `signInWithPopup` with `GoogleAuthProvider` and `getAuth`.
- Post-login token page (`/dashboard`) — displays the user's `accessToken` (via `getIdToken`) with one-click copy and back-to-login navigation.

## Local Setup

```bash
git clone https://github.com/DulmiKalupahana/tuga-login-app.git
cd tuga-login-app
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Requires a Firebase config in `src/config/firebase.ts` for Google login to work locally.
