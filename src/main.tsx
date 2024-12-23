import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { validateEnvVariables } from './config/env';

// Validate environment variables during development
if (import.meta.env.DEV) {
    validateEnvVariables();
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);