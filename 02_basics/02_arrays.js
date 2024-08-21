const marvelHeros = ["thor", "captain america", "black widow", "Ironman"]
const dcHeros = ["superman", "batman", "green lantern", "flash"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[4][1]);

// const newHero = marvelHeros.concat(dcHeros)
// console.log(newHero);

//spread out value
const all_new_heros = [...marvelHeros, ...dcHeros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [16, 17, [10, 8, 9]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("hitesh"))
console.log(Array.from("relentless"))
console.log(Array.from({name : "javascript"})) // make an array of keys or values INTERSETING CASE

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

