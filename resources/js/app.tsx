import './bootstrap';
import '../css/app.css';

import React from 'react';
import App from "./ReactApp";
import {createRoot} from "react-dom/client";


createRoot(document.getElementById('app')).render(<App/>);
