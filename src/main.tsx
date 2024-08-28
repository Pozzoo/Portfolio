import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import UpperBar from "./components/UpperBar.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('header-root')!).render(
    <StrictMode>
        <UpperBar />
    </StrictMode>
)
