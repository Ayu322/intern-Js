const marvel_heroes = ["Ironman", "spiderman", "thor"];
const dc_heroes = ["flash", "superman", "batman"];

// const heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);

const all_heroes = [...dc_heroes, ...marvel_heroes];
// console.log(all_heroes);


const real = [1, 2, 3, 4, [7, 8, 9], 11, 15, 19, [58, 89, [45, 98, [89, 225]]]];
const actual = real.flat(Infinity);
// console.log(actual);








console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "Ayush"}));  //interescting


