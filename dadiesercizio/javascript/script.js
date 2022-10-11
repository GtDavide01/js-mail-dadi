/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */



//Genero numero random per il giocatore 
const numberUser = Math.floor(Math.random()*(6)+1);
console.log(numberUser);
//Genero numero random per il computert 
const numberComputer = Math.floor(Math.random()*(6)+1);
console.log(numberComputer );
//SE il numero del giocatore è più alto di quello del computer 
//stampo messaggio con vittoria 
//Altrimenti stampo messaggio con sconfitta 

if (numberUser > numberComputer){
    alert("Complimenti , hai vinto contro il computer")
}else{
    alert("Ci dispiace , per questa volta hai perso :(")
}
