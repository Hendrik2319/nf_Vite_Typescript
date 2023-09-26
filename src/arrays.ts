
// Schritt 1: Erstellt ein Array von Zahlen. Nutzt die '.map'-Funktion, um alle Zahlen im Array zu verdoppeln.
let numbers: number[] = [ 1,3,5,8,2,9 ];
let doubleNumbers: number[] = numbers.map( n => n*2 );
console.log(numbers);
console.log(doubleNumbers);

// Schritt 2: Erstellt ein Array von Wörtern. Nutzt die '.filter'-Funktion, um nur die Wörter auszuwählen, die länger als 5 Buchstaben sind.
let words = [ "Klaus", "Haus", "Blumenbeet" ];
let longWords = words.filter( w => w.length>5 );
console.log(words);
console.log(longWords);

// Schritt 3: Erstellt ein Array von Zahlen. Nutzt die '.reduce'-Funktion, um die Summe aller Zahlen im Array zu berechnen.
let numbers2: number[] = [ 1,3,5,8,2,9 ];
let sum:number = numbers2.reduce( (n1, n2) => n1+n2);
console.log(numbers2);
console.log(sum);

// Schritt 4: Erstellt ein Array von Zahlen. Nutzt die '.some'-Funktion, um zu überprüfen, ob mindestens eine Zahl größer als 10 ist.
let numbers3: number[] = [ 1,3,15,8,12,9 ];
let isGreaterThan10 = numbers3.some( n => n>10 );
console.log(numbers3);
console.log("isGreaterThan10: " + isGreaterThan10);

