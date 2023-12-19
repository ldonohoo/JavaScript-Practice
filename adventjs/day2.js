function manufacture(gifts, materials) {
    let makeGift = null;
    let giftsCanBeMade = [];
    for (const gift of gifts) {
        makeGift = true;
        for (i=0; i < gift.length; i++) {
            if ( !(materials.includes(gift[i])) ) { makeGift = false; }
        }
        if (makeGift) { giftsCanBeMade.push(gift); }
    }
    return giftsCanBeMade;
}


let gifts = ['tren', 'oso', 'pelota'];
let materials = 'tronesa';

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

 gifts = ['juego', 'puzzle'];
 materials = 'jlepuz';

console.log(manufacture(gifts, materials)); // ["puzzle"]

 gifts = ['libro', 'ps5'];
 materials = 'psli';

console.log(manufacture(gifts, materials)); // []