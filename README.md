# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- # React + TypeScript + Vite

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
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
``` -->

# React JS + TypeScript

## _To study the documentation and concepts of React.js and practically implement different libraries to enhance my professional skills_

<!-- [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) -->

## Will cover following Toipics

### React JS Concepts

- JSX (JavaScript XML) - A syntax extension for JavaScript that looks similar to HTML. It allows you to write UI components in a declarative way.
- :white_check_mark: Components
- - :white_check_mark: Functional Components
- - :white_check_mark: Class Components
- :white_check_mark: Props (Properties) - Read-only attributes passed from parent to child components to configure or pass data.
- :white_check_mark: State - A built-in React object used to store data that changes over time and influences what is rendered.
- [React batches state updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- Lifecycle Methods - Methods available in class components that allow you to run code at specific points in a component's life cycle (e.g., componentDidMount, componentDidUpdate, componentWillUnmount). [@tjholowaychuk]
- Hooks - useState, useEffect, useContext, useReducer, useMemo, useCallback, useRef
  to Markdown converter
- Context API - A way to pass data through the component tree without having to pass props down manually at every level.
- Refs - A way to directly interact with DOM elements or store a value that persists between renders.
- Controlled vs. Uncontrolled Components - Controlled Components: Form elements whose value is controlled by React state. - Uncontrolled Components: Form elements that maintain their own internal state.
- Keys - Special string attributes used in lists to help React identify which items have changed, are added, or are removed.
- Portals -A way to render children into a DOM node outside the parent component hierarchy.
- Error Boundaries -Components that catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing the whole tree.
- Fragments - A way to group a list of children without adding extra nodes to the DOM.
- Higher-Order Components (HOCs) -A pattern used to enhance components by wrapping them in another component.
- Render Props - A technique for sharing code between components using a prop whose value is a function.
- PropTypes - A way to check the types of props passed to a component to ensure they are correct.
- Memoization - React.memo: A higher-order component that memoizes a component to prevent unnecessary re-renders. - useMemo and useCallback: Hooks used to memoize values and functions, respectively.
- Server-Side Rendering (SSR) - Rendering React components on the server before sending HTML to the client.
- Static Site Generation (SSG) - Pre-rendering pages at build time, typically used with frameworks like Next.js.
- Code Splitting - A technique to split code into smaller bundles that can be loaded on demand, improving performance.
- Lazy Loading - Dynamically importing components or modules only when they are needed.
- Concurrent Mode - A set of new features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed.
- Suspense - A feature that allows you to display a fallback UI while waiting for some asynchronous operation (like data fetching) to complete.
- React Fiber - The new reconciliation algorithm in React 16 that enables features like concurrent mode, time slicing, and more.
- Custom Hooks - Reusable functions that encapsulate logic using built-in hooks to share behavior across components.
- Context Providers and Consumers - Provider: A component that provides a value to its descendants. - Consumer: A component that subscribes to a context and uses its value.
- Virtual DOM - An in-memory representation of the actual DOM that React uses to efficiently update the UI.
- Babel - A JavaScript compiler that converts React JSX code into plain JavaScript.
- Webpack - A module bundler often used in React projects to bundle JavaScript files for usage in the browser.
- React Router - A library for managing navigation and routing in React applications.
- Redux - A state management library often used in large React applications to manage global state.
- Testing in React: - Jest: A testing framework often used with React.
  React Testing Library: A library for testing React components.
  Enzyme: Another popular testing utility for React.
- Component Composition: - The practice of combining components to build more complex UIs.
- Prop Drilling: - Passing props through multiple layers of components, which can lead to complex and difficult-to-maintain code.
- Styled Components: - A library for styling React components using tagged template literals and CSS-in-JS.
- React Query: - A library for managing server-state in React, with features for data fetching, caching, synchronization, and more.
- React Hook Form: - A library for handling form inputs, validations, and submissions using React hooks.
- :negative_squared_cross_mark: Next.js: - A React framework that provides SSR, SSG, and a range of other features for building web applications.
- PWA (Progressive Web Apps): - A web application that uses modern web capabilities to provide an app-like experience.
- :x: React Native: - A framework for building native apps using React.

### Live Coding Interview Solutions

- :white_check_mark: Make a dynamic dropdown with given json data.
- :white_check_mark: API integration.
