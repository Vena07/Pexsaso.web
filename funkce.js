let veci = ["🍀","💧","☀️","❤️","🎈","🚗","🐶","🍎","🍀","💧","☀️","❤️","🎈","🚗","🐶","🍎"];
let karta1s = "";
let karta2s = "";
let karta3s = "";
let karta4s = "";
let karta5s = "";
let karta6s = "";
let karta7s = "";
let karta8s = "";
let karta9s = "";
let karta10s = "";
let karta11s = "";
let karta12s = "";
let karta13s = "";
let karta14s = "";
let karta15s = "";
let karta16s = "";
let karty = ["tady nic nehledej ;)",karta1s,karta2s,karta3s,karta4s,karta5s,karta6s,karta7s,karta8s,karta9s,karta10s,karta11s,karta12s,karta13s,karta14s,karta15s,karta16s];
let poradi = 1;
let narade = "Hráč 1";
let rada1 = 1;
let hrac1 = 0;
let hrac2 = 0;
let vybrano1 = " ";
let vybrano2 = " ";
let kontrol = 0;
let uloz1 = null;
let uloz2 = null;


function rada(){
    if(rada1 === 1){
        rada1 = 2;
        narade = "Hráč1";

    } else if(rada1 === 2){
        rada1 = 1;
        narade = "Hráč2";

    }
}
rada();

for (let index = 0; index < 16; index++) {
    let vyber = Math.floor(Math.random() * veci.length);
    karty[index+1] = veci[vyber];
    veci.splice(vyber, 1);
}
console.log(karty);

function otoceni(id,x){
 

    
    let zmena = document.getElementById(id);
    if (zmena.innerHTML === "") {
        if(poradi === 1){ 
            zmena.innerHTML = karty[x];
            vybrano1 = karty[x];
            uloz1 = id;
            poradi = 2;   
            zmena.style.backgroundColor ='white';
        } else if(poradi === 2){
            zmena.innerHTML = karty[x];
            zmena.style.backgroundColor ='white';
            vybrano2 = karty[x];
            uloz2 = id;  
            if (vybrano1 === vybrano2) {
                if (rada1 === 2){
                    hrac1++;
                } else if (rada1 === 1){
                    hrac2++;
                }
                poradi = 1;
                document.getElementById("body1").innerHTML = "Hráč1 = " + hrac1;
                document.getElementById("body2").innerHTML = "Hráč2  = " + hrac2;
            } else {
                rada(); 
                poradi = 1;
                setTimeout(() => {
                    aktualita.innerHTML = "Na řade " + narade;
                    let vraceni = document.getElementById(uloz1);
                    vraceni.innerHTML = "" ;
                    vraceni.style.backgroundColor ='#ccffcb';
                    vraceni = document.getElementById(uloz2);
                    vraceni.innerHTML = "" ;
                    vraceni.style.backgroundColor ='#ccffcb';
                }, 500);
                
            }
            kontrol = hrac1 + hrac2;
            if(kontrol === 8){
                if (hrac1 > hrac2){
                    aktualita.innerHTML = "Hra je u konce, vítez je Hráč1";
                }
                else if(hrac1 === hrac2){
                    aktualita.innerHTML = "Hra je u konce, remíza.";

                }
                else{
                    aktualita.innerHTML = "Hra je u konce, vítez je Hráč2";
                }
                 
            }    
        }

    }
}
