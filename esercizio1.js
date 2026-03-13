// ESERCIZIO 1


let v = prompt ("inserisci voto")

if (v < 19 && v>=0) {
    console.log ("insufficente")

}
else if ( v >=21 && v <24){
    console.log ("buono")
}
else if (v >=24 && v <27){
    console.log("distinto")
}
else if (v >= 27 && v <=29){
    console.log("ottimo")
}
 else if (v ==30){
    console.log("eccellente")
}else { console.log ("voto non valido")}