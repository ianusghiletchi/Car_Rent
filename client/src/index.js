import React from 'react';
import { createRoot } from 'react-dom/client';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';
import './scss/style.scss';
import App from './components/App.jsx';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

// https://www.behance.net/gallery/163527433/Rent-A-Car TEMPLATE