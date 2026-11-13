import './style.css'
import {routes} from './router/routes.js';
import { Router } from './router';

const root = document.querySelector('#app');

const router = new Router(routes, root);
