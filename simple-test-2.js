// Masyvai
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 1.	Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
// const pinigine1 = [];
// const pinigine2 = [];
// for (let i = 1; i <= 100; i++) {
//     pinigine1.push(rand(10, 30))
//     pinigine2.push(rand(0, 10))
// }
// pinigine1.sort(function(a, b) {
//     return a - b;
//   });
//   pinigine2.sort(function(a, b) {
//     return a - b;
//   });
// console.log(pinigine1, pinigine2);

// --------------
console.log('\n------------ 1 ------------\n');
const pinigine1 = new Array(rand(10, 30)).fill(null).map(() => rand(0, 10));
console.log(pinigine1);

// 2.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
console.log('\n------------ 2 ------------\n');
let suma1 = 0;
pinigine1.forEach((element) => {
    suma1 += element;
});
console.log(suma1);
// 3.	Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log('\n------------ 3 ------------\n');
let suma2 = 0;
pinigine1.forEach((element) => {
    if (element > 2) suma2 += element;
    
});
console.log(suma2);
// 4.	Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log('\n------------ 4 ------------\n');
const pinigine2 = pinigine1.map(x => x <= 2 ? 0 : x);
console.log(pinigine2);

// 5.	Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
console.log('\n------------ 5 ------------\n');
const max = Math.max(...pinigine1);
const kiek = pinigine1.filter(element => element === max).length
console.log('Max: ', max, "Kiek: ", kiek);
// 6.	Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
console.log('\n------------ 6 ------------\n');
const pinigine3 = pinigine1.map((x, i) => x === 0 ? i : x);
console.log(pinigine3);
// 7.	Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
console.log('\n------------ 7 ------------\n');
const pinigine4 = [...pinigine1];
for (let i = pinigine4.length; i < 30; i++) {
    pinigine4.push(rand(0, 10));
}
console.log(pinigine4);
// 8.	Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log('\n------------ 8 ------------\n');
const m1 = [];
const m2 = [];
pinigine1.forEach(x => x <= 2 ? m1.push(x) : m2.push(x))
// const m2
console.log(m1, m2);
// 9.	Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
console.log('\n------------ 9 ------------\n');
const pinigineSuSkyreliais = [];
pinigineSuSkyreliais.push(m1);
pinigineSuSkyreliais.push(m2);
console.log(pinigineSuSkyreliais);
// 10.	Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
console.log('\n------------ 10 ------------\n');
pinigineSuSkyreliais.push(['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']);
console.log(pinigineSuSkyreliais);
// 11.	Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
console.log('\n------------ 11 ------------\n');
pinigineSuSkyreliais[2].sort();
console.log(pinigineSuSkyreliais);
// 12.	Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
console.log('\n------------ 12 ------------\n');
for (let i = pinigineSuSkyreliais[2].length; i < 20; i++) {
    rand(0,1) ? pinigineSuSkyreliais[2].push('MasterCard') : pinigineSuSkyreliais[2].push('Visa');
}
console.log(pinigineSuSkyreliais[2], pinigineSuSkyreliais[2].length);
// 13.	Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
console.log('\n------------ 13 ------------\n');

console.log(pinigineSuSkyreliais[2].filter(x => x === 'MasterCard').length);
console.log(pinigineSuSkyreliais[2].filter(x => x === 'Visa').length);

// 14.	Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
console.log('\n------------ 14 ------------\n');
pinigineSuSkyreliais.push([])
for (let i = 0; i < 10; i++) {
    pinigineSuSkyreliais[3].push(rand(1000000000, 9999999999));
}
console.log(pinigineSuSkyreliais);
// 15.	Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
console.log('\n------------ 15 ------------\n');
pinigineSuSkyreliais[3].sort(function(a, b) {
        return b - a;
      });
console.log(pinigineSuSkyreliais[3]);
// 16.	Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
console.log('\n------------ 16 ------------\n');

let summm = 0;
let kopiura = 0;
let visosKopiuros = [];

while (summm <= 500) {
    kopiura = rand(3, 10);
    summm += kopiura;
    visosKopiuros.push(kopiura);
    if (summm === 500) {
        break
    } else if (summm > 500) {
        // console.log(summm);
        summm = 0;
        visosKopiuros = [];
    }
}
console.log('Suma: ', summm, ' Buvo skyrelyje: ', pinigineSuSkyreliais[1], ' Pridejom i skyreli: ', visosKopiuros, ' Dabar skyrelyje yra: ', pinigineSuSkyreliais[1] = [...pinigineSuSkyreliais[1], ...visosKopiuros]);
let zum = 0;
visosKopiuros.forEach(x => zum += x);
console.log('zum: ', zum);
// 17.	Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
console.log('\n------------ 17 ------------\n');
let laimingiBil = [];

pinigineSuSkyreliais[3].forEach(bilietas => {
    if (bilietas % 777 === 0) laimingiBil.push(bilietas);
});
console.log('Kiek laimingu: ', laimingiBil.length, ' Laimingi bilietai: ', laimingiBil);
// 18.	 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
console.log('\n------------ 18 ------------\n');
pinigineSuSkyreliais.push(['šuo', 'katė', 'automobilis', 'namas', 'kiemas']);
console.log(pinigineSuSkyreliais[4]);

// pinigineSuSkyreliais[4].forEach(x => {
//     console.log(x.length); 
// });

pinigineSuSkyreliais[4].sort((a, b) => {
    return a.length - b.length;
});
console.log(pinigineSuSkyreliais[4]);