export function gameExitHtml() {

    const exitScreen = document.getElementById('exitScreen');

    if (!exitScreen) return;

    exitScreen.innerHTML = /*html*/ `
    <div class="exit__content">
        <div class="exit__content--text">
            <p>Are you sure you want to quit the game?</p>
        </div>

        <div class="exit__buttons">
            <button class="exit__buttons--btnGame">Back to game</button>
            <button class="exit__buttons--btnExit">Exit game</button>
        </div>
    </div>
    `;

    // 🔥 JETZT existiert der Button → Event setzen
    const backBtn = exitScreen.querySelector('.exit__buttons--btnGame');

    backBtn?.addEventListener('click', backToGame);
}

function backToGame() {
    document.getElementById('exitScreen')?.classList.add('hidden');
}