import './styles/style.scss';
// import { cardHtml, match, player } from './GameConfig';
// import { createDeck } from './utilities/shuffleArray';
import { cardHtml, currentPlayer, } from './GameConfig';
import { createDeck } from './utilities/shuffleArray';


const boardSize: number = 16; // Das muss abhängig sein vom Button (16, 24 oder 36) und wird an die Funktion cardHtml übergeben, damit die richtige Anzahl an Karten generiert wird. Außerdem muss es an createDeck übergeben werden, damit die richtige Anzahl an Karten gemischt wird.

const fieldRef = document.getElementById('field');
const header = document.getElementById('header');


init(fieldRef, header)


function init(fieldRef: HTMLElement | null, display: HTMLElement | null) {

    const deck = createDeck(boardSize);
    console.log(deck);

    headerHtml(header); //Game Header wird generiert
    cardHtml(fieldRef, deck); //Card content wird generiert
    flipCard(fieldRef); // Cards flippen
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
        // Gefundene Paare markieren
        firstCard?.classList.add('matched');
        secondCard?.classList.add('matched');

        resetTurn();
    }

    function unflipCards() {
        setTimeout(() => {
            // Kein Paar → Karten wieder schließen
            firstCard?.classList.remove('is-flipped');
            secondCard?.classList.remove('is-flipped');

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

            <div class="game-display">Hallo</div>

            <div class="current__player">current player:
                <img class="current__player--image" src="${currentPlayer ? './src/images/items/playerOne.svg' : './src/images/items/playerTwo.svg'}" alt="player signe">
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



