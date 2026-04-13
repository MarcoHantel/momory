
import { cardFace } from "../GameConfig";

export function createDeck(boardSize: number) {
    const pairCount: number = boardSize / 2;

    const selectedCards = [...cardFace].slice(0, pairCount); // „Erstelle eine Kopie von cardFace und nimm daraus nur so viele Motive, wie ich für die Anzahl der Paare brauche.“
    const doubleCards = [...selectedCards, ...selectedCards];     // „Erstelle ein neues Array, das die ausgewählten Motive zweimal enthält.“
    const shuffledDeck = shuffleArray(doubleCards);     // „Mische die Karten, damit sie in zufälliger Reihenfolge angeordnet sind.“
    return shuffledDeck;
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