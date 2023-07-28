import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WankulNavbar from "./Component/WankulNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from "./Form/Auth/LoginForm";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryParameters = new URLSearchParams(window.location.search);
const login = queryParameters.get("login");

root.render(
    <React.StrictMode>
        <WankulNavbar/>
        <App/>
        {login && (
            <LoginForm/>
        )}
    </React.StrictMode>
);

reportWebVitals();
