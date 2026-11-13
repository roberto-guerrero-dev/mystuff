export class Router {
    /**
     * 
     * @param {Array<{path: string, title: string, view: () => HTMLElement}>} routes
     * @param {HTMLElement} rootElement
     */
    constructor(routes, rootElement) {
        this.routes = routes;
        this.root = rootElement;
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-link]');
            if (link) {
                e.preventDefault();
                this.navigate(link.getAttribute('href'));
            }
        });

        window.addEventListener('popstate', () => this.handleRoute());
        this.handleRoute();
    }

    navigate(url) {
        history.pushState(null, null, url);
        this.handleRoute();
    }

    handleRoute() {
        const currentPath = window.location.pathname;

        const route = this.routes.find((r) => r.path === currentPath)
        || this.routes.find((r) => r.path === '/404')
        || this.routes.find((r) => r.path === '/');

        if (!route) return;

        if (route.title) {
            document.title = route.title;
        }

        this.root.innerHTML = '';

        const viewElement = route.view();
        this.root.appendChild(viewElement);
    }
}