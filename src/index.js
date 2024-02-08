import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import DefaultTheme from './GlobalTheme';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ModalProvider } from 'styled-react-modal';
import { FadingBackground } from 'components/Modal/PopUp.styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={DefaultTheme}>
          <ModalProvider backgroundComponent={FadingBackground}>
            <App />
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
