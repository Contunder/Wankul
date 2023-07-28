import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CollectionHome from "./Component/Collection/CollectionHome";
import Home from "./Component/Home";
import SearchCardHome from "./Component/Search/SearchCardHome";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Collection" element={<CollectionHome/>} />
                <Route path="/Search/Card" element={<SearchCardHome/>} />
            </Routes>
        </BrowserRouter>
    )
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

