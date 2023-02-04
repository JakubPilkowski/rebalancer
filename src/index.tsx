import React from 'react';
import { createRoot } from 'react-dom/client';

import './style.css';

function App() {
  return <h1 className="text-orange-500">rebalancer</h1>;
}

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

root.render(<App />);
