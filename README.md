# Feelings Diary - React Application

A React-based diary application that allows users to track their daily mood and journal entries.

## Live Preview

Click below to try the app:

👉 [Feelings Diary](https://feelings-diary.vercel.app/)

## React Concepts & Implementation

Custom Hooks

- `useDiary`: Fetches specific diary entries by ID from the application's context. Handles navigation if entry doesn't exist.
- `usePageTitle`: Updates the browser tab title dynamically based on current page/entry being viewed.

State Management

- **Context API**: Avoids **Props Drilling**. Using DiaryStateContext for global state access of diary data and DiaryDispatchContext for CRUD actions.
- **Reducer Pattern**: Implements a reducer function to handle state transitions.
- **Local Storage**: Diary entries are stored in browser's localStorage to store data between sessions.

Key React Features Used

- **useEffect**: For side effects like data fetching and initializing from localStorage.
- **useRef**: To maintain reference to incrementing IDs.
- **useState**: For managing local component state like form inputs, loading state, and sorting preferences.
- **React Router**: Implementing navigation between pages (Home, New, Edit, Diary view).

Component Architecture

- **Editor**: Reusable form component for both creating and editing entries.
- **EmotionItem**: Interactive for selecting mood/emotion.
- **DiaryList**: lists of diary entries with sorting capabilities.
- **DiaryItem**: diary entry cards that make up the list.
- **Viewer**: information of a specific diary entry.
- Basic components like header and button

# Getting Started

```bash
# install dependencies
npm install

# start development server
npm run dev
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
