export const cardFace: string[] = [
    'src/images/cardFace/angular.svg',
    'src/images/cardFace/bootstrap.svg',
    'src/images/cardFace/typeScript.svg',
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
];

export let currentPlayer = true; //true = player one, false = player two
export const match: boolean = false; //true = match, false = no match

export function cardHtml(fieldRef: HTMLElement | null, deck: string[]) {
    if (!fieldRef) return;

    fieldRef.innerHTML = '';

    for (let i = 0; i < deck.length; i++) {
        cardHtmlContent(fieldRef, deck[i], i);
    }
}

function cardHtmlContent(fieldRef: HTMLElement, cardImage: string, index: number) {
    fieldRef.innerHTML += /*html*/`
        <button class="card" data-card="${cardImage}" data-index="${index}">
            <div class="card__inner">
                <div class="card__face">
                    <img class="card__image" src="src/images/cardBack/cardBack1.svg" alt="Card Back">
                </div>
                <div class="card__face card__face--back">
                    <img class="card__image" src="${cardImage}" alt="Card Face">
                </div>
            </div>
        </button>
    `;
}

// function matchCard() {
//     if (match) {

//         console.log('match found!')
//     }
// }