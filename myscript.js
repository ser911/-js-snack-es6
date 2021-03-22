// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var teams = [

{
  nome: "juventus",
  punti: 0,
  falli: 0
},
{
  nome: "milan",
  punti: 0,
  falli: 0
},
{
  nome: "inter",
  punti: 0,
  falli: 0
}

];

for (var i = 0; i < teams.length; i++) {
  teams[i].punti = getRandomNumber(1,100);
  teams[i].falli = getRandomNumber(1,50);
}
console.log(teams);

var newTeams = [];
for (var i = 0; i < teams.length; i++) {
  newTeams.push(
const { nomi, falli } = teams[i]
  )
}
console.log(newTeams);
