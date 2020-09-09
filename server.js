let superheroes = require('superheroes');
let supervillains = require('supervillains');

// console.log(superheroes.all);
// console.log(superheroes.random());

// superheroes.all.forEach(element => {
    // console.log(element)
// });

// supervillains.all.forEach(element => {
//     console.log(element)
// })

// console.log('superhero: ' + superheroes.random() + ' vs supervillains: ' + supervillains.random());

// console.log(superheroes.random() + ' vs ' + supervillains.random());

// console.log(supervillains.all.length);

let max;

if (supervillains.all.length > superheroes.all.length) {
    max = supervillains.all.length;
} else {
    max = superheroes.all.length;
}

var i;
for (i = 0; i < max; i++) {
    console.log(' \u001b[' + 32 + 'm' + superheroes.random() + '\u001b[0m ' + 'vs ' + ' \u001b[' + 34 + 'm' + supervillains.random() + '\u001b[0m');
}
