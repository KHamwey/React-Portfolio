# React Portfolio

Personal portfolio site built with React and React Bootstrap to showcase projects, skills, and contact channels.

## Prerequisites

- Node.js 20+
- npm 10+

## Getting Started

```bash
npm install
npm start
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm start`: Run the app in development mode.
- `npm run build`: Create an optimized production build.
- `npm test`: Run tests in watch mode.
- `npm run test:ci`: Run tests once with coverage output.
- `npm run lint`: Run ESLint on source files.

## Deployment (AWS Amplify)

This repository is configured for AWS Amplify deployment from your connected branch.

Recommended flow:

1. Push changes to the branch Amplify is tracking.
2. Amplify runs its build pipeline and deploys automatically.

For local verification before pushing, run:

1. `npm run lint`
2. `npm run test:ci`
3. `npm run build`

## Environment Variables

No custom environment variables are currently required. If variables are added later, they should use the `REACT_APP_` prefix and be documented here.

## Quality and CI

- GitHub Actions workflow at `.github/workflows/ci.yml` runs install, lint, test, and build on pushes and pull requests.
- Dependabot config at `.github/dependabot.yml` checks npm dependencies weekly.

## Contribution Checklist

Before opening a PR:

1. Run `npm run lint`
2. Run `npm run test:ci`
3. Run `npm run build`
4. Confirm external links and section navigation still work
