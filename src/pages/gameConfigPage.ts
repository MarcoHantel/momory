import { init } from "../main";
import { gameState } from "../main";

function getImage(path: string): string {
  return import.meta.env.BASE_URL + path;
}

export function createConfigScreen() {

  document.getElementById('configScreen')!.innerHTML = /*html*/`

<div class="config-screen__settings">
    <div class="config-screen__settings-wrapper">
        <h1>Settings</h1>
        <img src="${getImage('images/items/line3.svg')}" alt="">
    </div>

<div>
<fieldset class="fieldset ">
  <legend class="settings__config">
    <img 
      class="settings__config--img" 
      src="${getImage('images/items/palette.svg')}" 
      alt="palette"
    >
    <p class="settings__config--headline">Game themes</p>
  </legend>

  <div class="settings__config--optins">
    <input type="radio" id="CodeVibes" name="theme" value="codeVibes" checked />
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
  <legend class="settings__config">
    <img 
      class="settings__config--img" 
      src="${getImage('images/items/chess_pawn.svg')}" 
      alt="chess pawn"
    >

    <p class="settings__config--headline">Choose player</p>
  </legend>

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
  <legend class="settings__config">
    <img 
      class="settings__config--img" 
      src="${getImage('images/items/style.svg')}" 
      alt="style book"
    >

    <p class="settings__config--headline">Board size</p>
  </legend>

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
    
    <img 
      id="imageGame" 
      src="${getImage('images/items/theme_Visual.svg')}" 
      alt="config theme"
    >

    <div class="config-screen__image--text">

      <div id="selectedTheme">Code vibes</div>

      <img src="${getImage('images/items/line6.svg')}" alt="">

      <div id="selectedPlayer">Blue</div>

      <img src="${getImage('images/items/line6.svg')}" alt="">

      <div id="selectedBoard">16 cards</div>

      <div id="start-game-btn" class="config-screen__image--btn">
          <img 
            src="${getImage('images/items/play_btn.svg')}" 
            alt="config theme"
          >

          <div>Start</div>
      </div>
    </div>

</div>
`;

  updatePreview();

  const inputs = document.querySelectorAll('input[type="radio"]');

  inputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;

      if (target.name === 'theme') {
        changeImage(target.value);
      }

      updatePreview();
    });
  });

  function updatePreview() {
    const selectedTheme = (document.querySelector('input[name="theme"]:checked') as HTMLInputElement)?.value;

    const selectedPlayer = (document.querySelector('input[name="player"]:checked') as HTMLInputElement)?.value;

    const selectedBoard = (document.querySelector('input[name="boardSize"]:checked') as HTMLInputElement)?.value;

    const themeEl = document.getElementById('selectedTheme');
    const playerEl = document.getElementById('selectedPlayer');
    const boardEl = document.getElementById('selectedBoard');

    if (themeEl) {
      themeEl.textContent =
        selectedTheme === 'codeVibes'
          ? 'Code vibes'
          : 'DA Project';
    }

    if (playerEl) {
      playerEl.textContent =
        selectedPlayer === 'blue'
          ? 'Blue'
          : 'Orange';
    }

    if (boardEl) {
      boardEl.textContent = `${selectedBoard} cards`;
    }
  }

  const startBtn = document.getElementById('start-game-btn');

  startBtn?.addEventListener('click', () => {

    const selectedTheme = (document.querySelector('input[name="theme"]:checked') as HTMLInputElement)?.value;

    const selectedPlayer = (document.querySelector('input[name="player"]:checked') as HTMLInputElement)?.value;

    const selectedBoardSize = Number(
      (document.querySelector('input[name="boardSize"]:checked') as HTMLInputElement)?.value
    );

    startGame(selectedTheme, selectedPlayer, selectedBoardSize);
  });
}

function startGame(theme: string, player: string, size: number) {
  gameState.theme = theme;
  gameState.player = player;
  gameState.boardSize = size;

  applyTheme(theme);

  const field = document.getElementById('field');

  field?.classList.remove('grid-4', 'grid-6');

  if (size === 16) {
    field?.classList.add('grid-4');
  } else {
    field?.classList.add('grid-6');
  }

  const fieldRef = document.getElementById('field');
  const header = document.getElementById('header');

  document.getElementById('configScreen')?.classList.add('hidden');
  document.getElementById('gameScreen')?.classList.remove('hidden');

  init(fieldRef, header, size, player);
}

function applyTheme(theme: string) {
  document.body.className = '';

  document.body.classList.add(`theme-${theme}`);
}

function changeImage(theme: string) {
  const image = document.getElementById('imageGame') as HTMLImageElement;

  if (!image) return;

  image.src =
    theme === 'codeVibes'
      ? getImage('images/items/theme_Visual.svg')
      : getImage('images/items/Da.svg');
}