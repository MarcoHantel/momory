import './styles/style.scss';
import { cardHtml } from './GameConfig';
import { createDeck } from './utilities/shuffleArray';
import { gameStartPage } from './pages/gameStartPage';
import { createConfigScreen } from './pages/gameConfigPage';
import { Card } from './model/card.class';
import { gameExitHtml } from './pages/gameExitPage';
import { gameOverHtml } from './pages/gameOverPage';
import { gameWinnerHtml } from './pages/gameWinnerPage';


const boardSize: number = 16; 
const header: HTMLElement | null = document.getElementById('header');

export const gameState = {

    playerOneScore: 0,
    playerTwoScore: 0,
    currentPlayer: true,
    theme: "codeVibes",
    player: "blue",
    boardSize: 16,
    drawGame: ''
};

startApp();

function startApp() {
    createConfigScreen(); 
    gameStartPage(); 
    gameExitHtml(); 
}

export function init(fieldRef: HTMLElement | null, header: HTMLElement | null, boardSize: number, selectedPlayer: string) {
    const deck = createDeck(boardSize);

    gameState.currentPlayer = selectedPlayer === 'blue';

    headerHtml(header);

    if (!fieldRef || !header) {
        throw new Error("DOM elements missing");
    }

    const cardMap = cardHtml(fieldRef, deck);

    flipCard(fieldRef, cardMap); 
}


function flipCard(
    fieldRef: HTMLElement | null,
    cardMap: Map<HTMLButtonElement, Card>,
  
) {
    if (!fieldRef) return;

    let firstCard: Card | null = null;
    let secondCard: Card | null = null;

    let firstEl: HTMLButtonElement | null = null;
    let secondEl: HTMLButtonElement | null = null;

    let lockBoard = false;

    fieldRef.addEventListener("click", event => {
        const el = (event.target as HTMLElement).closest('.card') as HTMLButtonElement | null;

        if (!el) return;
        if (lockBoard) return;
        if (el === firstEl) return;

        const card = cardMap.get(el); 

        if (!card || card.isMatched) return;

        el.classList.add('is-flipped');
        card.flip();

        if (!firstCard) {
            firstCard = card;
            firstEl = el;
            return;
        }

        secondCard = card;
        secondEl = el;
        lockBoard = true;

        checkForMatch();
    });

    function checkForMatch() {
        if (!firstCard || !secondCard) return;

        const isMatch = firstCard.compareTo(secondCard); 

        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard?.setMatched();
        secondCard?.setMatched();

        firstEl?.classList.add('matched');
        secondEl?.classList.add('matched');

        if (gameState.currentPlayer) {
            gameState.playerOneScore++;
        } else {
            gameState.playerTwoScore++;
        }

        headerHtml(header);
        checkGameOver();

        resetTurn();
    }

    function unflipCards() {
        setTimeout(() => {
            firstEl?.classList.remove('is-flipped');
            secondEl?.classList.remove('is-flipped');

            firstCard?.reset();
            secondCard?.reset();

            gameState.currentPlayer = !gameState.currentPlayer;

            headerHtml(header);

            resetTurn();
        }, 1000);
    }

    function resetTurn() {
        firstCard = null;
        secondCard = null;
        firstEl = null;
        secondEl = null;
        lockBoard = false;
    }
}


function headerHtml(header: HTMLElement | null) {

    const assets = getThemeAssets(gameState.theme);
    const playerImagePath: string = getPlayerImage(gameState.theme);

    const mainHeader = header!.innerHTML = /*html*/`
    <div class="game__header">
        <div class="game__header--inner">
            <div class="game__display">
                <div class="game__display--item--blue"> <img src="${assets.playerOne}" alt="Player One"> ${assets.contentOne} ${gameState.playerOneScore}</div>
                <div class="game__display--item--orange"> <img src="${assets.playerTwo}" alt="Player Two"> ${assets.contentTwo} ${gameState.playerTwoScore} </div>
            </div>
            <div class="current__player">
             <div class="current__player--text">Current player:
                <img class="current__player--image" src="${playerImagePath}" alt="player signe">
             </div>
            </div>
            <a class="link__exit" href="#">
              <div class="button__exit">
                 <img class="button__exit--image" src="${assets.exit}" alt="Exit Icon">
                 <div class="button__exit--button">Exit game</div>
             </div>
            </a>
        </div>
    </div>
    
    `;

    const extBtn = header!.querySelector('.button__exit');
    extBtn?.addEventListener('click', exitTheGame);
}

function exitTheGame() {
    document.getElementById('exitScreen')?.classList.remove('hidden');
}

type ThemeAssets = {
    exit: string;
    playerOne: string;
    playerTwo: string;
    contentOne: string;
    contentTwo: string;
    orangePlayer: string;
    bluePlayer: string;
    drawGame: string;
};

function getImage(path: string): string {
    return import.meta.env.BASE_URL + path;
}

export function getThemeAssets(theme: string): ThemeAssets {
    if (theme === "codeVibes") {
        return {
            exit: getImage("images/items/exit.svg"),
            playerOne: getImage("images/items/playerOne.svg"),
            playerTwo: getImage("images/items/playerTwo.svg"),
            contentOne: "Blue",
            contentTwo: "Orange",
            orangePlayer: getImage("images/items/player-orange-vibes.svg"),
            bluePlayer: getImage("images/items/player-blue-vibes.svg"),
            drawGame: getImage("images/items/player_draw_codevibes.png")
        };
    } else {
        return {
            exit: getImage("images/items/da_exit.svg"),
            playerOne: getImage("images/items/da_player1.svg"),
            playerTwo: getImage("images/items/da_player2.jpg"),
            contentOne: "",
            contentTwo: "",
            orangePlayer: getImage("images/items/player-orange-da.svg"),
            bluePlayer: getImage("images/items/player-blue-da.svg"),
            drawGame: getImage("images/items/player_draw_da.png")
        };
    }
}

function getPlayerImage(theme: string): string {
    if (theme === "codeVibes") {
        return gameState.currentPlayer
            ? getImage("images/items/playerOne.svg")
            : getImage("images/items/playerTwo.svg");
    } else {
        return gameState.currentPlayer
            ? getImage("images/items/da_player1.svg")
            : getImage("images/items/da_player2.jpg");
    }
}

function checkGameOver() {
    const totalPairs = boardSize / 2;
    const totalScore = gameState.playerOneScore + gameState.playerTwoScore;

    if (totalScore === totalPairs) {
        showScore();
    }
}

function showScore() {

    gameOverHtml();
    document.getElementById('gameOverScreen')?.classList.remove('hidden');
    document.getElementById('gameOverScreen')?.classList.add('hidden');

    setTimeout(() => {
        showWinner();
    }, 3000);
}

function showWinner() {
    const winnerText = getWinnerText();

    gameWinnerHtml(winnerText);

    document.getElementById('gameWinnerScreen')?.classList.remove('hidden');
    document.getElementById('gameOverScreen')?.classList.add('hidden');
    document.getElementById('gameScreen')?.classList.add('hidden');
}

function getWinnerText(): string {
    if (gameState.playerOneScore > gameState.playerTwoScore) {
        return 'Blue player';
    } else if (gameState.playerTwoScore > gameState.playerOneScore) {
        return 'Orange player';
    } else {
        return 'Draw!';
    }
}



