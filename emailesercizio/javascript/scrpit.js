/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

//Chiedo all'utente la sua email 
const userEmail = prompt("Inserisci la tua email personale...");
console.log(userEmail);

//Array contenente la lista delle email valide 
const emailVerified = ["pippo@gmail.com" , "pluto@gmail.com" , "paperino@gmail.com" , "topolino@gmail.com"]; 
console.log(emailVerified);

//Controllo che l'email dell'utente sia nella lista di chi può accedere
//variabile booleana che contiene vero in caso di accesso positivo e false in caso di accesso negativo 
let isVerified = false; 

//Per ogni elemento dell'array verifico se corrisponde con l'email dell'utente 
for (let i = 0 ; i< emailVerified.length ; i++){
    //variabile che contiene elementi 
    const emailArray = emailVerified[i];
    //SE l'email dell'utente corrisponde l'accesso diventa positivo quindi true 
    if (emailArray === userEmail ){
        isVerified = true ; 
    }
    console.log(emailArray , userEmail , isVerified );
}


if (isVerified === false){
    alert ("La tua email non ha i permessi per accedere , ci dispiace :(")
}else  {
    alert ("La tua email può accedere , la preghiamo di continuare inserendo la password...")
}
