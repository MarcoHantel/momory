function getImage(path: string): string {
    return import.meta.env.BASE_URL + path;
}

export function gameStartPage() {

    document.getElementById("startScreen")!.innerHTML = /*html*/`
    
      <div class="start-screen__container">
        <div class="start-screen__container--title">It's play time.</div>
        <h1 class="start-screen__container--text">Ready to play?</h1>
      </div>

        <div id="start-game" class="start-screen__btn">
            <img 
                class="start-screen__btn--imgC" 
                src="${getImage('images/items/stadiaController.svg')}" 
                alt="Play Icon"
            >

            <div class="start-screen__btn--text">Play</div>

            <img 
                class="start-screen__btn--imgA" 
                src="${getImage('images/items/arrow1.svg')}" 
                alt="Play Icon"
            >
        </div>

        <img 
            class="controller" 
            src="${getImage('images/items/controller.svg')}" 
            alt="Play Icon"
        >
    `;

    const startBtn = document.getElementById("start-game");

    startBtn?.addEventListener("click", startConfig);
}

export function startConfig() {
    document.getElementById('startScreen')?.classList.add('hidden');
    document.getElementById('configScreen')?.classList.remove('hidden');
}