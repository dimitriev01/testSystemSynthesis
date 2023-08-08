import ReactDOM from 'react-dom/client';
import App from 'app';
import Theme from 'shared/theme/ui';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Theme>
    <App />
  </Theme>
);
