import './styles/style.scss';

const boardSize: number = 16;

const fieldRef = document.getElementById('field');
const header = document.getElementById('header');

const cardFace = [
    'src/images/cardFace/angular.svg',
    'src/images/cardFace/bootstrap.svg',
    'src/images/cardFace/css3.svg',
    'src/images/cardFace/datenbank.svg',
    'src/images/cardFace/django.svg',
    'src/images/cardFace/firebase.svg',
    'src/images/cardFace/git.svg',
    'src/images/cardFace/gitHub.svg',
    'src/images/cardFace/html.svg',
    'src/images/cardFace/javaScript.svg',
    'src/images/cardFace/nodeJs.svg',
    'src/images/cardFace/python.svg',
    'src/images/cardFace/react.svg',
    'src/images/cardFace/sass.svg',
    'src/images/cardFace/terminal.svg',
    'src/images/cardFace/vsCode.svg',
    'src/images/cardFace/vue.svg'
]

init(fieldRef, header)

function init(fieldRef: HTMLElement | null, display: HTMLElement | null) {

    headerHtml(header) //Game Header wird generiert
    cardHtml(fieldRef) //Card content wird generiert
    flipCard(fieldRef) // Cards flippen
}

function flipCard(fieldRef: HTMLElement | null) {

        if (fieldRef) {
        fieldRef.addEventListener("click", event => {
            const card = (event.target as HTMLAudioElement).closest('.card') as HTMLButtonElement;
            if (card) {
                card.classList.toggle('is-flipped');
            }
        })
    }
}

function cardHtml(fieldRef: HTMLElement | null) {
    fieldRef!.innerHTML = ''; // Erst leeren

    if (boardSize == 16) {
        cardFace.length = 16;
    } else if (boardSize == 24) {
        cardFace.length = 24;
    } else if (boardSize == 36) {
        cardFace.length = 36;
    }

    for (let i = 0; i < cardFace.length; i++) {
        cardHtmlContent(i)
    }
}

function cardHtmlContent(i: number) {
    return fieldRef!.innerHTML += /*html*/`
        <button class="card">
            <div class="card__inner">
                <div class="card__face"><img class="card__image" src="src/images/cardBack/cardBack1.svg" alt="Card Back"></div>
                <div class="card__face card__face--back"><img class="card__image" src="${cardFace[i]}" alt="Card Face"></div>
            </div>
        </button>

    `;
}

function headerHtml(header: HTMLElement | null) {
    header!.innerHTML = /*html*/`
    <div class="game__header">
        <div class="game__header--inner">
          <div class="game-display">Blue Oragen</div>
          <div class="game-exit">Exit Game</div>
        </div>
    </div>
    
    `;
}



