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

# React JS + TypeScript Tasks

<!-- ## _To study the documentation and concepts of React.js and practically implement different libraries to enhance my professional skills_ -->

<!-- [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) -->

## Will cover following Toipics

### React JS Concepts

1.  JSX (JavaScript XML) - A syntax extension for JavaScript that looks similar to HTML. It allows you to write UI components in a declarative way.

2.  :white_check_mark: Components

    1. :white_check_mark: Functional Components
    2. :white_check_mark: Class Components

3.  :white_check_mark: Props (Properties) - Read-only attributes passed from parent to child components to configure or pass data.

4.  :white_check_mark: State - A built-in React object used to store data that changes over time and influences what is rendered.

5.  :white_check_mark: [React batches state updates](https://react.dev/learn/queueing-a-series-of-state-updates)

6.  Lifecycle Methods - Methods available in class components that allow you to run code at specific points in a component's life cycle (e.g., componentDidMount, componentDidUpdate, componentWillUnmount). [@tjholowaychuk]

7.  Hooks

    1. :white_check_mark: useState
    2. :white_check_mark: useEffect
    3. useContext
    4. useReducer
    5. useMemo
    6. useCallback
    7. useRef

8.  Context API - A way to pass data through the component tree without having to pass props down manually at every level.

9.  Refs - A way to directly interact with DOM elements or store a value that persists between renders.

10. Controlled vs. Uncontrolled Components - Controlled Components: Form elements whose value is controlled by React state. - Uncontrolled Components: Form elements that maintain their own internal state.

11. Keys - Special string attributes used in lists to help React identify which items have changed, are added, or are removed.

12. Portals -A way to render children into a DOM node outside the parent component hierarchy.

13. Error Boundaries -Components that catch JavaScript errors anywhere in their child component tree and display a fallback UI instead of crashing the whole tree.

14. :white_check_mark: Fragments - A way to group a list of children without adding extra nodes to the DOM.

15. Higher-Order Components (HOCs) -A pattern used to enhance components by wrapping them in another component.

16. Render Props - A technique for sharing code between components using a prop whose value is a function.

17. PropTypes - A way to check the types of props passed to a component to ensure they are correct.

18. Memoization - React.memo: A higher-order component that memoizes a component to prevent unnecessary re-renders. - useMemo and useCallback: Hooks used to memoize values and functions, respectively.

19. Server-Side Rendering (SSR) - Rendering React components on the server before sending HTML to the client.

20. Static Site Generation (SSG) - Pre-rendering pages at build time, typically used with frameworks like Next.js.

21. Code Splitting - A technique to split code into smaller bundles that can be loaded on demand, improving performance.

22. Lazy Loading - Dynamically importing components or modules only when they are needed.

23. Concurrent Mode - A set of new features that help React apps stay responsive and gracefully adjust to the user’s device capabilities and network speed.

24. Suspense - A feature that allows you to display a fallback UI while waiting for some asynchronous operation (like data fetching) to complete.

25. React Fiber - The new reconciliation algorithm in React 16 that enables features like concurrent mode, time slicing, and more.

26. Custom Hooks - Reusable functions that encapsulate logic using built-in hooks to share behavior across components.

27. Context Providers and Consumers - Provider: A component that provides a value to its descendants. - Consumer: A component that subscribes to a context and uses its value.

28. Virtual DOM - An in-memory representation of the actual DOM that React uses to efficiently update the UI.

29. Babel - A JavaScript compiler that converts React JSX code into plain JavaScript.

30. Webpack - A module bundler often used in React projects to bundle JavaScript files for usage in the browser.

31. :white_check_mark: React Router - A library for managing navigation and routing in React applications.

32. Redux - A state management library often used in large React applications to manage global state.

33. Testing in React: - Jest: A testing framework often used with React.
    React Testing Library: A library for testing React components.
    Enzyme: Another popular testing utility for React.

34. :white_check_mark: Component Composition (Composition vs Inheritance): - The practice of combining components to build more complex UIs.

35. Prop Drilling: - Passing props through multiple layers of components, which can lead to complex and difficult-to-maintain code.

36. Styled Components: - A library for styling React components using tagged template literals and CSS-in-JS.

37. React Query: - A library for managing server-state in React, with features for data fetching, caching, synchronization, and more.

38. React Hook Form: - A library for handling form inputs, validations, and submissions using React hooks.

39. :negative_squared_cross_mark: Next.js: - A React framework that provides SSR, SSG, and a range of other features for building web applications.

40. :x: PWA (Progressive Web Apps): - A web application that uses modern web capabilities to provide an app-like experience.

41. React Native: - A framework for building native apps using React.

42. Client side Rendering: .

## Live Coding Interview Solutions

- :white_check_mark: Make a dynamic dropdown with given json data.
- :white_check_mark: API integration.

# Links

- React: https://react.dev/
- React Legacy: https://legacy.reactjs.org/
- Babel: https://babeljs.io/
- React Test: https://jestjs.io/docs/getting-started
- React Hook Form: https://react-hook-form.com/
- Axios: https://axios-http.com/docs/intro
- Axios: https://www.npmjs.com/package/axios
- React Query: https://tanstack.com/query/v3
- React Routes: https://reactrouter.com/en/main/start/tutorial#setup
- Next JS: https://nextjs.org/docs
- Express JS: https://expressjs.com/
- Full-stack JavaScript: https://www.meteor.com/
- https://swc.rs/
