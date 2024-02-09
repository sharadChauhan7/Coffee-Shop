import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './config/user'
import {PopupState} from './config/popup'


ReactDOM.createRoot(document.getElementById('root')).render(
    <PopupState>
    <UserProvider>
        <App />
    </UserProvider>
    </PopupState>
)
