export function gameStartPage() {

    document.getElementById("startScreen")!.innerHTML = /*html*/`
    
      <div class="start-screen__container">
        <div class="start-screen__container--title">It's play time.</div>
        <h1 class="start-screen__container--text">Ready to play?</h1>
      </div>

        <div id="start-game" class="start-screen__btn">
            <img class="start-screen__btn--imgC" src="./src/images/items/stadiaController.svg" alt="Play Icon">
            <div class="start-screen__btn--text">Play</div>
            <img class="start-screen__btn--imgA" src="./src/images/items/arrow1.svg" alt="Play Icon">
        </div>

        <img class="controler" src="./src/images/items/Controller.svg" alt="Play Icon">
    `;

    const startBtn = document.getElementById("start-game"); // muss über Eventlistener gehen, da sonst die Funktion startConfig() nicht
    // gefunden wird, wenn sie in der HTML definiert ist. Das liegt daran, dass die Funktion erst nach dem Laden der HTML definiert 
    // wird und somit nicht im globalen Scope verfügbar ist, wenn die HTML geladen wird.
    startBtn?.addEventListener("click", startConfig);

}

export function startConfig() {
    document.getElementById('startScreen')?.classList.add('hidden');
    document.getElementById('configScreen')?.classList.remove('hidden');

}