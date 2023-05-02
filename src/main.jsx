import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import PermanentDrawerLeft from './pages/dashboard';
import { Auth } from './components/auth';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App'>
    <Login/>
    </div>
  </React.StrictMode>,
)
