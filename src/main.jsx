import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/style/main.css"
import App from './App.jsx'
import AnnouncementsProvider from './contexte/AnnouncementsProvider.jsx'

createRoot(document.getElementById('root')).render(
    <AnnouncementsProvider>
        <App />
    </AnnouncementsProvider>
)
