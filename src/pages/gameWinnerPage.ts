import { gameState } from "../main";
import { getThemeAssets } from "../main";

export function gameWinnerHtml(winnerText: string) {
    const gameWinnerScreen = document.getElementById('gameWinnerScreen');
    if (!gameWinnerScreen) return;

    const winnerClass =
        gameState.playerOneScore > gameState.playerTwoScore
            ? 'winner-blue'
            : gameState.playerTwoScore > gameState.playerOneScore
            ? 'winner-orange'
            : 'winner-draw';

    const winnerImage = getWinnerImage();

    gameWinnerScreen.innerHTML = /*html*/`
        <div class="gamewinner__winner ${winnerClass}">
            <img src="./src/images/items/confetti.svg" alt="">
            <p class="gamewinner__winner--text">The winner is</p>
            <h2 class="gamewinner__winner--h2">${winnerText}</h2>
            <img class="gamewinner__winner--image" src="${winnerImage}" alt="">
            <button class="gamewinner__winner--btn"><p>Home</p></button>
        </div>
    `;
}

function getWinnerImage(): string {
    const assets = getThemeAssets(gameState.theme);

    if (gameState.playerOneScore > gameState.playerTwoScore) {
        return assets.bluePlayer;
    } else if (gameState.playerTwoScore > gameState.playerOneScore) {
        return assets.orangePlayer;
    } else if (gameState.playerTwoScore == gameState.playerOneScore){
        return assets.drawGame;
    }
    return '';
}