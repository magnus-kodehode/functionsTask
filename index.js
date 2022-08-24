/*
1. Lag en funksjon som tar i mot et tall, sjekker om tallet er
par eller oddetall, og returner enten "Odd" eller "Even"

f.eks:
console.log(oddOrEven(12))
--> skal vise "Even" i konsollen

2. Skriv en funksjon som tar i mot 2 parametre:

    - Et tall, som er et klokkeslett (0000 til 2359) og
    - Et navn, som er en string.
   
Funksjonen skal returne:

"Good night (navn)" hvis klokkeslettet er mellom 0000 og 0600
"Good morning (navn)" hvis klokkeslettet er mellom 0600 og 1200
"Good afternoon (navn)" hvis klokkeslettet er mellom 1200 og 1500
"Good day (navn)" hvis klokkeslettet er mellom 1500 og 1800
"Good evening (navn)" hvis klokkeslettet er mellom 1800 og 2359

f.eks:
console.log(greet(1251, "Gunnar"))
--> skal vise "Good afternoon Gunnar" i konsollen
*/
let num1 = 5
let oddOrEven = ""

function checker() 
{
    if (num1 % 2 === 1)//Sjekker om num1 delt på 2 gir en restverdi.
    {
        oddOrEven = "odd" //odd blir logget hvis condition'en er sann.
        console.log(oddOrEven)
    }
    else 
    {
        oddOrEven = "even" //logger even hvis det ikke er noen restverdi.
        console.log(oddOrEven)
    }
}

checker()

// Oppgave 2
let time = 1255
let firstName = "Endre"

function greeting() { //sjekker klokkeslett, og logger en string etter hvilket klokkeslett som er lagt inn.
if (time <= 600) { 
    console.log("Good night" + " " + firstName)
} else if (time <= 1200) {
    console.log("Good morning" + " " + firstName) 
} else if (time <= 1500) {
    console.log("Good afternoon" + " " + firstName)
} else if (time <= 1800) {
    console.log("Good day" + " " + firstName)
} else if (time <= 2359) {
    console.log("Good evening" + " " + firstName)
} else {
    console.log("Invalid entry")
}
}

greeting()

/*
Synes begge oppgavene er løst på en veldig clunky måte.
Hadde satt pris på litt input på alternative måter å gjøre det på.
*/