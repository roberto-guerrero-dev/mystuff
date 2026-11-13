export function DashBoardView() {

    const container = document.createElement('section');
    container.className = 'view dashboard-view';

    const today = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const pendingCheckIn = true;
    const habitsCount = 3;

    container.innerHTML = `
    <header class="view-header">
        <p class="date-badge">${today}</p>
        <h1>Mi Bitácora Personal</h1>
        <p class="subtitle">Enfoque, disciplina y orden para hoy.</p>
    </header>

    <div class="metrics-grid">
        <article class="card">
            <h3>Check-in Diario</h3>
            <p>${pendingCheckIn ? 'Pendiente de registrar' : 'Completado hoy'}</p>
            <a href="/checkin" data-link class="btn btn-primary">
            ${pendingCheckIn ? 'Hacer Check-in' : 'Ver registro'}
            </a>
        </article>
    </div>
    `;

    return container;

}