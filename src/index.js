import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h1>Weather App</h1>
        <Weather />
        <br />
        <br />
        <footer>
            <a href="https://github.com/Lalapaya/shecodesreact" target="_blank" rel="noreferrer">
                Open-source code
            </a>{' '}
            by{' '}
            <a href="https://lalapaya.com" target="_blank" rel="noreferrer">
                Luise Bauer
            </a>
        </footer>
    </React.StrictMode>,
);
