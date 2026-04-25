
import { cardFace } from "../GameConfig";
import { Card } from "../model/card.class"; // Pfad ggf. anpassen

export function createDeck(boardSize: number): Card[] {
    const pairCount: number = boardSize / 2;

    // 1. Karten auswählen
    const selectedCards = [...cardFace].slice(0, pairCount);

    // 2. Paare erstellen
    const doubleCards = [...selectedCards, ...selectedCards];

    // 3. Mischen
    const shuffledDeck = shuffleArray(doubleCards);

    // 4. 👉 Hier passiert die Magie:
    // Strings → Card Objekte
    const cardObjects = shuffledDeck.map(value => new Card(value));

    return cardObjects;
}

function shuffleArray(array: string[]): string[] {

    // 1. Kopie vom ursprünglichen Array erstellen
    // Wichtig: Wir wollen das Original nicht verändern!
    const shuffled = [...array];

    // 2. Von hinten nach vorne durch das Array laufen
    for (let i = shuffled.length - 1; i > 0; i--) {

        // 3. Zufälligen Index zwischen 0 und i erzeugen
        // Math.random() gibt eine Zahl zwischen 0 und 1 zurück
        // * (i + 1) skaliert das auf 0 bis i
        // Math.floor rundet ab → ganze Zahl
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // 4. Zwei Elemente tauschen (Swap)
        // Element an Position i wird mit einem zufälligen Element getauscht
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }

    // 5. Gemischtes Array zurückgeben
    return shuffled;
}
