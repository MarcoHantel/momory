import './styles/style.scss';

const fieldRef = document.getElementById('field');
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

init(fieldRef)

function init(fieldRef: HTMLElement | null) {
    cardHtml(fieldRef)
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
    for (let i = 0; i < cardFace.length; i++) {
        fieldRef!.innerHTML += /*html*/`
        <button class="card">
            <div class="card__inner">
                <div class="card__face"></div>
                <div class="card__face card__face--back"><img class="card__image" src="${cardFace[i]}" alt="Card Face"></div>
            </div>
        </button>
   `;
    }
}



