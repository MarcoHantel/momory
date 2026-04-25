
export function gameExitHtml() {

    document.getElementById('exitScreen')!.innerHTML = /*html*/ `

    <div class="exit__content">
        <div class="exit__content--text">
            <p>Are you sure want to quit the game?</p>
        </div>

        <div class="exit__buttons">
            <button class="exit__buttons--btnGame">Back to game</button>
            <button class="exit__buttons--btnExit">Exit game</button>
        </div>
    </div>
    `;

}