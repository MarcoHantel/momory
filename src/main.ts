import './styles/style.scss';
import { cardHtml } from './GameConfig';
import { createDeck } from './utilities/shuffleArray';
import { gameStartPage } from './pages/gameStartPage';
import { createConfigScreen } from './pages/gameConfigPage';    


const boardSize: number = 16; // Das muss abhängig sein vom Button (16, 24 oder 36) und wird an die Funktion cardHtml übergeben, damit die richtige Anzahl an Karten generiert wird. Außerdem muss es an createDeck übergeben werden, damit die richtige Anzahl an Karten gemischt wird.

// const fieldRef = document.getElementById('field');
const header = document.getElementById('header');

const gameState = {
    playerOneScore: 0,
    playerTwoScore: 0,
    currentPlayer: true
};


startApp(); // 👉 DAS ist jetzt dein Einstiegspunkt

function startApp() {
    createConfigScreen(); //Game Config Page wird generiert
    gameStartPage(); // 👈 Startscreen anzeigen
    
}

export function init(
    fieldRef: HTMLElement | null,
    header: HTMLElement | null,
    boardSize: number,
    selectedPlayer: string
) {
    const deck = createDeck(boardSize);

    gameState.currentPlayer = selectedPlayer === 'blue';

    headerHtml(header);
    cardHtml(fieldRef, deck);
    flipCard(fieldRef);

}


function flipCard(fieldRef: HTMLElement | null) {
    if (!fieldRef) return;

    // Speichert die erste gewählte Karte
    let firstCard: HTMLButtonElement | null = null;

    // Speichert die zweite gewählte Karte
    let secondCard: HTMLButtonElement | null = null;

    // Sperrt das Spielfeld während zwei Karten geprüft werden
    let lockBoard = false;

    fieldRef.addEventListener("click", event => {
        const card = (event.target as HTMLElement).closest('.card') as HTMLButtonElement | null;

        // Abbruch, falls kein gültiges Kartenelement geklickt wurde
        if (!card) return;

        // Keine weiteren Klicks erlauben, solange zwei Karten geprüft werden
        if (lockBoard) return;

        // Verhindert Doppelklick auf dieselbe Karte
        if (card === firstCard) return;

        // Bereits gematchte Karten sollen nicht erneut anklickbar sein
        if (card.classList.contains('matched')) return;

        // Karte visuell umdrehen
        card.classList.add('is-flipped');

        // Falls noch keine erste Karte gespeichert ist, diese Karte als erste merken
        if (!firstCard) {
            firstCard = card;
            return;
        }

        // Sonst ist dies die zweite Karte
        secondCard = card;

        // Board sperren, bis Vergleich abgeschlossen ist
        lockBoard = true;

        // Karten vergleichen
        checkForMatch();
    });

    function checkForMatch() {
        if (!firstCard || !secondCard) return;

        const firstValue = firstCard.dataset.card;
        const secondValue = secondCard.dataset.card;

        const isMatch = firstValue === secondValue;

        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard?.classList.add('matched');
        secondCard?.classList.add('matched');

        // Score erhöhen je nach aktuellem Spieler
        if (gameState.currentPlayer) {
            gameState.playerOneScore++;
        } else {
            gameState.playerTwoScore++;
        }

        console.log('Punkt für:', gameState.currentPlayer ? 'Blue' : 'Orange');
        console.log('blue:', gameState.playerOneScore, 'orange:', gameState.playerTwoScore);

        // Header neu rendern
        headerHtml(header);

        // Spielende prüfen
        checkGameOver();

        resetTurn();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard?.classList.remove('is-flipped');
            secondCard?.classList.remove('is-flipped');

            //Spieler wechseln
            gameState.currentPlayer = !gameState.currentPlayer;

            console.log('Jetzt dran:', gameState.currentPlayer ? 'Blue' : 'Orange');

            headerHtml(header);

            resetTurn();
        }, 1000);
    }

    function resetTurn() {
        // Für den nächsten Zug alles zurücksetzen
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }

}



function headerHtml(header: HTMLElement | null) {
    header!.innerHTML = /*html*/`
    <div class="game__header">
        <div class="game__header--inner">
            <div class="game__display">
                <div class="game__display--item--blue"> <img src="./src/images/items/playerOne.svg" alt="Player One"> Blue ${gameState.playerOneScore}</div>
                <div class="game__display--item--orange"> <img src="./src/images/items/playerTwo.svg" alt="Player Two"> Orange ${gameState.playerTwoScore} </div>
            </div>
            <div class="current__player">
             <div class="current__player--text">current player:
                <img class="current__player--image" src="${gameState.currentPlayer ? './src/images/items/playerOne.svg' : './src/images/items/playerTwo.svg'}" alt="player signe">
             </div>
            </div>
            <a class="link__exit" href="#">
              <div class="button__exit">
                 <img class="button__exit--image" src="src/images/items/exit.svg" alt="Exit Icon">
                 <div class="button__exit--button">Exit game</div>
             </div>
            </a>
        </div>
    </div>
    
    `;
}

function checkGameOver() {
    const totalPairs = boardSize / 2;
    const totalScore = gameState.playerOneScore + gameState.playerTwoScore;

    if (totalScore === totalPairs) {
        endGame();
    }
}

function endGame() {
    let winnerText = '';

    if (gameState.playerOneScore > gameState.playerTwoScore) {
        winnerText = 'Player Blue wins!';
    } else if (gameState.playerTwoScore > gameState.playerOneScore) {
        winnerText = 'Player Orange wins!';
    } else {
        winnerText = 'Draw!';
    }

    // erstmal simpel mit alert
    setTimeout(() => {
        alert(winnerText); // hier dann HTML Seite bauen mit Gewinneranzeige, Button für neues Spiel etc.
    }, 500);
}



