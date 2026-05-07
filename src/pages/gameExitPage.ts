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

    const backBtn = exitScreen.querySelector('.exit__buttons--btnGame');
    const exitBtn = exitScreen.querySelector('.exit__buttons--btnExit');

    backBtn?.addEventListener('click', backToGame);
    exitBtn?.addEventListener('click', quitGame);
}

function backToGame() {
    document.getElementById('exitScreen')?.classList.add('hidden');
}

function quitGame() {
    document.getElementById('configScreen')?.classList.remove('hidden');
    document.getElementById('exitScreen')?.classList.add('hidden');
    document.getElementById('gameScreen')?.classList.add('hidden');
}

