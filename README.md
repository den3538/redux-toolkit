Gh-pages - https://den3538.github.io/redux-toolkit/

Deploy:![CI](https://github.com/den3538/redux-toolkit/actions/workflows/ci.yml/badge.svg)

# Redux Toolkit E-Commerce Demo

> This project is a demo e-commerce application built with **React**, **Redux Toolkit**, **TypeScript**, and **Vite**. It features a simple product catalog, shopping cart, and product details, using modern best practices and a modular code structure.

## Features

- Product listing with details
- Shopping cart with add, remove, and quantity adjustment
- Product data fetched from [Fake Store API](https://fakestoreapi.com/) (with fallback to local mock data)
- State management with Redux Toolkit (including RTK Query for API calls)
- TypeScript for type safety
- Tailwind CSS for styling
- React Router for navigation

## Project Structure

```
src/
  App.tsx            # Main app with routes
  Layout.tsx         # Layout with navigation
  pages/             # Home, Cart, Product pages
  components/        # UI and common components
  store/             # Redux slices, store, API
  types/             # TypeScript types
  hooks/             # Custom hooks
  constants/         # Constants (API base URL)
  mock-data.json     # Local fallback product data
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/den3538/redux-toolkit.git
cd redux-toolkit
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3538](http://localhost:3538).

### Build for Production

```bash
npm run build
# or
yarn build
```

### Linting

```bash
npm run lint
```

## Main Dependencies

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## API & Data

- **Products** are fetched from [Fake Store API](https://fakestoreapi.com/). If the API is unavailable, local mock data is used.
- **Cart** state is managed in Redux and persisted for the session.

## Scripts

- `dev` – Start development server
- `build` – Build for production
- `preview` – Preview production build
- `lint` – Run ESLint
- `lint:fix` – Auto-fix lint issues

## Folder Highlights

- `src/pages/` – Home, Cart, and Product detail pages
- `src/store/` – Redux slices for cart and products, RTK Query API setup
- `src/components/common/` – Reusable UI components (Card, Button, etc.)
- `src/types/` – TypeScript interfaces for products and cart

## License

MIT
},
// other options...
},
},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
