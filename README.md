# Countries App

Display information about a country. Input the name and the app will display infomration about it.

## Version history

| Version | Date              | Comments                      |
| ------- | ----------------- | ----------------------------- |
| 1.0.1   | March 3, 2025     | Commence country-app          |
| 1.0.0   | February 24, 2025 | Scratch release to production |

## Changelog notes

### v1.0.1

- clear template, start with blank page

### v1.0.0

- Scratch version of Vite template

## Features

- Scaffolded using Vite with React + TypeScript template
- Uses the RestCountries API
- Deployed to Azure Portal as a Static Web App

## References

- [Vite](https://vite.dev)

## React + TypeScript + Vite

```
npm run dev
npm run build
npm run preview
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
