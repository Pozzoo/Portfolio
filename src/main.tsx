import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import TaskBar from "./components/TaskBar.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('footer-root')!).render(
    <StrictMode>
        <TaskBar />
    </StrictMode>
)
