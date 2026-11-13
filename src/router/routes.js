import { DashBoardView } from "../views/DashboardView";

export const routes = [
    {
        path: '/',
        title: 'Panel Principal | Bitácora',
        label: 'Inicio',
        showInNav: true,
        view: DashBoardView
    },
    {
        path: '/habitos',
        title: 'Hábitos y Disciplina',
        label: 'Hábitos',
        showInNav: true,
        view: () => {
            const div = document.createElement('div');
            div.innerHTML = '<h2>Vista de Hábitos (en construcción)</h2><a href="/" data-link> ← Volver </a>';

            return div;
        }
    },
    {
        path: '/checkin',
        title: 'Check-in Diario',
        label: 'Check-in',
        showInNav: true,
        view: () => {
            const div = document.createElement('div');
            div.innerHTML = '<h2>Vista de Check-in (en construcción)</h2><a href="/" data-link>← Volver</a>';
            return div;
        }
    }
];