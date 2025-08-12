import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <div className="min-h-screen w-full bg-[#020617] relative">
  {/* Emerald Radial Glow Background */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
    }}
  />
    <App/>
</div>
 
  </StrictMode>,
)
