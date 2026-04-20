

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
    <input type="radio" id="CodeVibes" name="drone" value="CodeVibes" checked />
    <label for="CodeVibes">Code vibes</label>
  </div>

  <div class="settings__config--optins">
    <input type="radio" id="daPproject" name="drone" value="daPproject" />
    <label for="daPproject">DA Project</label>
  </div>
</fieldset>
</div>

<div>
<fieldset class="fieldset">
  <legend class="settings__config" ><img class="settings__config--img" src="./src/images/items/chess_pawn.svg" alt="chess pawn"> <p class="settings__config--headline">Choose player</p></legend>
  <div class="settings__config--optins">
    <input type="radio" id="player1" name="drone" value="blue" checked />
    <label for="player1">Blue</label>
  </div>

  <div>
    <input type="radio" id="player2" name="drone" value="orange" />
    <label for="player2">Orange</label>
  </div>
</fieldset>
</div>

<fieldset class="fieldset">
  <legend class="settings__config" ><img class="settings__config--img" src="./src/images/items/style.svg" alt="style book"><p class="settings__config--headline">Board size</p></legend>
  <div class="settings__config--optins">
    <input type="radio" id="card16" name="drone" value="card16" checked />
    <label for="card16">16 cards</label>
  </div>

  <div class="settings__config--optins">
    <input type="radio" id="card24" name="drone" value="card24" />
    <label for="card24">24 cards</label>
  </div>

    <div class="settings__config--optins">
    <input type="radio" id="card36" name="drone" value="card36" />
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
        <div class="config-screen__image--btn">
            <img src="./src/images/items/play_btn.svg" alt="config theme">
            <div>Start</div>
        </div>
    </div>

</div>
    `;
}