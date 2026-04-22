import { init } from "../main";

export function createConfigScreen() {

    document.getElementById('configScreen')!.innerHTML = /*html*/`

<div class="config-screen__settings">
    <div class="config-screen__settings-wrapper">
        <h1>Settings</h1>
        <img src="./src/images/items/line3.svg" alt="">
    </div>

<div>
<fieldset class="fieldset ">
  <legend class="settings__config"><img class="settings__config--img" src="./src/images/items/palette.svg" alt="palette"><p class="settings__config--headline">Game themes</p></legend>
  <div class="settings__config--optins">
    <input type="radio" id="CodeVibes" name="theme" value="CodeVibes" checked />
    <label for="CodeVibes">Code vibes</label>
  </div>

  <div class="settings__config--optins">
    <input type="radio" id="daPproject" name="theme" value="daPproject" />
    <label for="daPproject">DA Project</label>
  </div>
</fieldset>
</div>

<div>
<fieldset class="fieldset">
  <legend class="settings__config" ><img class="settings__config--img" src="./src/images/items/chess_pawn.svg" alt="chess pawn"> <p class="settings__config--headline">Choose player</p></legend>
  <div class="settings__config--optins">
    <input type="radio" id="player1" name="player" value="blue" checked />
    <label for="player1">Blue</label>
  </div>

  <div>
    <input type="radio" id="player2" name="player" value="orange" />
    <label for="player2">Orange</label>
  </div>
</fieldset>
</div>

<fieldset class="fieldset">
  <legend class="settings__config" ><img class="settings__config--img" src="./src/images/items/style.svg" alt="style book"><p class="settings__config--headline">Board size</p></legend>
  <div class="settings__config--optins">
    <input type="radio" id="card16" name="boardSize" value="16" checked />
    <label for="card16">16 cards</label>
  </div>

  <div class="settings__config--optins">
    <input type="radio" id="card24" name="boardSize" value="24" />
    <label for="card24">24 cards</label>
  </div>

    <div class="settings__config--optins">
    <input type="radio" id="card36" name="boardSize" value="36" />
    <label for="card36">36 cards</label>
  </div>
</fieldset>
</div>
</div>

<div class="config-screen__image">
    
    <img src="./src/images/items/theme_Visual.svg" alt="config theme">

    <div class="config-screen__image--text" >
        <div>Game theme</div>
        <img src="./src/images/items/line6.svg" alt="line in yelow">
        <div>Player</div>
        <img src="./src/images/items/line6.svg" alt="line in yelow">
        <div>Board size</div>
        <div id="start-game-btn" class="config-screen__image--btn">
            <img src="./src/images/items/play_btn.svg" alt="config theme">
            <div>Start</div>
        </div>
    </div>

</div>
    `;


    const startBtn = document.getElementById('start-game-btn');

    startBtn?.addEventListener('click', () => {

        // 👉 Werte JETZT auslesen (nicht vorher!)
        const selectedTheme = (document.querySelector('input[name="theme"]:checked') as HTMLInputElement)?.value;

        const selectedPlayer = (document.querySelector('input[name="player"]:checked') as HTMLInputElement)?.value;

        const selectedBoardSize = Number(
            (document.querySelector('input[name="boardSize"]:checked') as HTMLInputElement)?.value
        );

        startGame(selectedTheme, selectedPlayer, selectedBoardSize);
    });
}


function startGame(theme: string, player: string, size: number) {

    applyTheme(theme); //Theme zuerst setzen

    const fieldRef = document.getElementById('field');
    const header = document.getElementById('header');

    console.log(player, size, theme);


    // 👉 Screens wechseln
    document.getElementById('configScreen')?.classList.add('hidden');
    document.getElementById('gameScreen')?.classList.remove('hidden');

    // 👉 SPIEL STARTEN
    init(fieldRef, header, size, player);
}

function applyTheme(theme: string) {
    document.body.className = ''; // alles resetten

    document.body.classList.add(`theme-${theme}`);
}