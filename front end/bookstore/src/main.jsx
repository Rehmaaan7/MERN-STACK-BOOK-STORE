import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from "./context/contextProvider.jsx"


createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
    <ContextProvider>
       <div className='dark:bg-slate-900 dark:text-white'>
       <App />
     </div>
    </ContextProvider> 
    </BrowserRouter>
  </StrictMode>
)
