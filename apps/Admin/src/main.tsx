// import { StrictMode } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import * as ReactDOM from 'react-dom/client';
// import App from './app/app';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// );


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';
import './styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure index.html has <div id="root"></div>.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);