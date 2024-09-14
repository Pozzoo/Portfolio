import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import TaskBar from "./components/TaskBar.tsx";
import {AuthProvider} from "./context/AuthProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
          <App />
      </AuthProvider>
  </StrictMode>,
)

createRoot(document.getElementById('footer-root')!).render(
    <StrictMode>
        <TaskBar />
    </StrictMode>
)