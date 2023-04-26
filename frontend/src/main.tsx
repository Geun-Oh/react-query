import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

// queryClient를 생성해주세요!

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      {/* queryClient를 전달해주세요! */}
      <QueryClientProvider>
        {/* Devtools를 추가해주세요! */}
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
