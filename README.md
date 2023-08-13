# live-coding-template

Ce gabarit possède tous les outils configurés pour développer un projets Vue 3 avec Vite.

## Notes concernant la configuration de Vite

Vite est déjà configuré pour :

- Transformer les fichiers Vue (`.vue`)
- Autoimporter ce qui est exposé par `vue` (`ref`, `computed`, `type Ref`, etc.), `vue-router` ('useRoute', 'useRouter', etc.) et pinia ('defineStore', etc.)
- Utiliser UnoCSS (comme tailwind ou windicss en mieux), notamment avec les icônes (`<span class="i-ri-arrow-right-line">`)

## Installation des dépendances

```sh
npm install
```

### Compilation et Hot-Reload pour le développement

```sh
npm run dev
```

## Énoncé de l’exercice

Pour l’énoncé de l’exercice, Cf. [Exercice](./Exercice.md)

## Configuration recommandée

- Visual Studio Code avec ces extensions :
  - [VSCode](https://code.visualstudio.com/)
  - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (et Vetur désactivé)
  - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Vue Ecosystem Snippets](https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets)

## Support de TypeScript pour les fichiers `.vue`

TypeScript ne sait pas gérer les informations de type pour les imports dans les fichiers `.vue` par défault, donc la CLI `tsc` est remplacée par `vue-tsc` pour la vérification des types. Dans les éditeurs, il est besoin de l’extension [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) pour rendre le service du langage TypeScript capable de gérer les types des fichiers `.vue`.

Si le plugin TypeScript ne vous semble pas assez performant, Volar a aussi implémenté un [mode Take Over](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) qui est plus performant. Vous pouvez l’activer en suivant les étapes suivantes :

1. Désactiver l’extension TypeScript incluse
    1) Lancer `Extensions: Show Built-in Extensions` depuis la palette de commandes VSCode
    2) Trouver `TypeScript and JavaScript Language Features`, cliquer avec le bouton droit et sélectionner `Disable (Workspace)`
2. Recharger la fenêtre VSCode en lançant `Developer: Reload Window` depuis la palette de commandes.

### Vérification des types, Compilation et Minification pour la Production

```sh
npm run build
```

### Lancer les Tests Unitaires avec [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lancer les Tests End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

Cela lance les tests end-to-end avec le code de développement et le server de développement Vite.
C’est bien plus rapide que le build de production.

Cependant, il est recommandé de lancer les tests end-to-end avec le code de production : il faut lancer le build puis lancer
cypress avec le server Vite qui sert le code de production :

```sh
npm run build
npm run test:e2e
```

### Analyse statique du code avec [ESLint](https://eslint.org/)

```sh
npm run lint
```
