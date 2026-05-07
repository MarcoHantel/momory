import { Card } from './model/card.class';

const base = import.meta.env.BASE_URL;

export const cardFace: string[] = [
    base + 'images/cardFace/angular.svg',
    base + 'images/cardFace/bootstrap.svg',
    base + 'images/cardFace/typeScript.svg',
    base + 'images/cardFace/css3.svg',
    base + 'images/cardFace/datenbank.svg',
    base + 'images/cardFace/django.svg',
    base + 'images/cardFace/firebase.svg',
    base + 'images/cardFace/git.svg',
    base + 'images/cardFace/gitHub.svg',
    base + 'images/cardFace/html.svg',
    base + 'images/cardFace/javaScript.svg',
    base + 'images/cardFace/nodeJs.svg',
    base + 'images/cardFace/python.svg',
    base + 'images/cardFace/react.svg',
    base + 'images/cardFace/sass.svg',
    base + 'images/cardFace/terminal.svg',
    base + 'images/cardFace/vsCode.svg',
    base + 'images/cardFace/vue.svg'
];

export const match: boolean = false;

export function cardHtml(fieldRef: HTMLElement, deck: Card[]) {

    fieldRef.innerHTML = '';

    const map = new Map<HTMLButtonElement, Card>();

    deck.forEach(card => {

        const button = document.createElement('button');

        button.classList.add('card');

        button.innerHTML = `
            <div class="card__inner">

                <div class="card__face">
                    <img 
                        src="${base}images/cardBack/cardBack1.svg"
                        alt="Card back"
                    >
                </div>

                <div class="card__face card__face--back">
                    <img 
                        src="${card.value}"
                        alt="Card face"
                    >
                </div>

            </div>
        `;

        fieldRef.appendChild(button);

        map.set(button, card);
    });

    return map;
}