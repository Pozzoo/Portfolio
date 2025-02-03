import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { WindowProvider } from './context/WindowContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </StrictMode>,
)
