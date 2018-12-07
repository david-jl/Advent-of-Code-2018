let fs = require("fs");
const datos = fs.readFileSync("./input.txt").toString();

//let datos = "dabAcCaCBAcCcaDA";

let parte1 = ()=>{
    let polymers = datos;
    for(let i = 0; i<polymers.length; i++){
        let letra = polymers.charCodeAt(i);
        let letraDesp = polymers.charCodeAt(i+1);
        if(letra===(letraDesp-32) || letra===(letraDesp+32)){
            polymers = polymers.substr(0,i) + polymers.substr(i+2);
            i =-1;
        }
    }
    return polymers.length;
};

let parte2 = ()=>{
    let menor = 1000000;
    for(let j = 65; j<91; j++) {
        let polymers = datos;
        for(let w = 0; w<1000; w++) {
            polymers = polymers.replace(String.fromCharCode(j), '');
            polymers = polymers.replace(String.fromCharCode(j + 32), '');
        }
        for (let i = 0; i < polymers.length; i++) {
            let letra = polymers.charCodeAt(i);
            let letraDesp = polymers.charCodeAt(i + 1);
            if (letra === (letraDesp - 32) || letra === (letraDesp + 32)) {
                polymers = polymers.substr(0, i) + polymers.substr(i + 2);
                i = -1;
            }
        }
        if(polymers.length < menor) {menor = polymers.length}
    }
    return menor;
};

//console.log(parte1());
console.log(parte2());