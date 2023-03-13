import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './styles.css'
import { BrowserRouter as Router } from 'react-router-dom'
// https://www.simplilearn.com/tutorials/reactjs-tutorial/routing-in-reactjs



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App />
    </Router>
)