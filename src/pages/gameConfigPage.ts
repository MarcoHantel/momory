

export function createConfigScreen() {
    document.getElementById('configScreen')!.innerHTML = /*html*/`

<div class="config-screen__settings">
<div>Settings</div>


<div>
<fieldset>
  <legend><img src="./src/images/items/palette.svg" alt="palette"> themes</legend>
  <div>
    <input type="radio" id="CodeVibes" name="drone" value="CodeVibes" checked />
    <label for="CodeVibes">Code vibes</label>
  </div>

  <div>
    <input type="radio" id="daPproject" name="drone" value="daPproject" />
    <label for="daPproject">DA Project</label>
  </div>
</fieldset>
</div>

<div>
<fieldset>
  <legend><img src="./src/images/items/chess_pawn.svg" alt="chess pawn">Choose player</legend>
  <div>
    <input type="radio" id="player1" name="drone" value="blue" checked />
    <label for="player1">Blue</label>
  </div>

  <div>
    <input type="radio" id="player2" name="drone" value="orange" />
    <label for="player2">Orange</label>
  </div>
</fieldset>
</div>

<fieldset>
  <legend><img src="./src/images/items/style.svg" alt="style book">Board size</legend>
  <div>
    <input type="radio" id="card16" name="drone" value="card16" checked />
    <label for="card16">16 cards</label>
  </div>

  <div>
    <input type="radio" id="card24" name="drone" value="card24" />
    <label for="card24">24 cards</label>
  </div>

    <div>
    <input type="radio" id="card36" name="drone" value="card36" />
    <label for="card36">36 cards</label>
  </div>
</fieldset>
</div>
</div>

<div class="config-screen__image">
    
    <img src="./src/images/items/theme_Visual.svg" alt="config theme">

    <div>Game theme</div>
    <div>Player</div>
    <div>Board size</div>
    
    <div><img src="./src/images/items/play_btn.svg" alt="config theme">play</div>
</div>
    `;
}