import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';

function App() {
  return <h1 className="text-orange-500">rebalancer</h1>;
}

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(<App />);
