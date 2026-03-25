import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NavigationProvider } from './context/NavigationContext';
import { AudioProvider } from './context/AudioContext';
import './styles/global.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationProvider>
      <AudioProvider>
        <App />
      </AudioProvider>
    </NavigationProvider>
  </StrictMode>
);
