const correctAnswers = ["C", "B", "B", "A","C"]; //praveme niza od vrednostite za sekoj tocen radio button odgovor
const form = document.querySelector(".quiz-form"); 
const span = document.querySelector(".result span"); // selektor za span tagot vo result divot
const result = document.querySelector(".result"); // selektor za celiot result div
form.addEventListener('submit', function(event){
    event.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]; // ja zima vrednosta od site prasanja (A ili B ili C) , taka sostavuvame niza od korisnickite selektirani vrednosti 

    //check answers
    userAnswers.forEach(function(answer,index){ //answer e vrednosta a index e pozicijata ( taka e forEach callback funkcijata)
        if(answer === correctAnswers[index]){  // proveruva dali momentalnoto ( neli iterira) value od userAnswer nizata e isto so valueto vo correctAnswer nizata za istata pozicija!
            
                score += 20; // ako se sovpagaat odgovorite , togas dodadi 25 na score promenlivata
        }

    });
    console.log(score); // za sekoj tocen odgovor dobiva 25 score

    //Show result on page:
    
    result.classList.remove('d-none'); // ovde ovozmozuvame toa da se pokaze na ekran so toa sto vo result div-ot mu ja briseme prethodno napisanata klasa d-none i so toa avtomatski se pokazuva rezultatot
    scrollTo(0,0); //metod koj sto prima argument pozicija vo koja da ne skrolne, znaci koga ke pretisneme submit ke ne otskroluva do vrvot na stranata (pocetnata tocka)
    //Animacija na rezultatot:
    //Animacijata raboti taka sto najprvin imame brojac setiran na 0
    // potoa pravime promenliva timer setirana na metodot setInterval vo cija sto callback funkcija imame
    // imame go setirano textContentot vo span tagot da bide ednakov na brojacot
    // znaci kako se zgolemuva brojacot taka se zgolemuva i ovoj textContent
    // potoa imame proverka dali brojacot e ednakov na score
    //odnosno proveruvame dali brojacot stignal do rezultatot koj sto go osvoil korisnikot
    //ako da togas se povikuva metodot za prekin na intervalot clearInterval so argument samata promenliva vo koja e metodot setInterval
    // ako ne togas zgolemi go brojacot za 1
    // celiov interval da se povtoruva za samo 10 milisekundi
    let brojac = 0; // ova ke bide brojacot fakticki score-ot koj sto ke se zgolemuva
    const timer = setInterval(function(){
        span.textContent = `${brojac} %`; // sega na span tagot mu dodavame textContent brojac promenlivata plus %
        if(brojac === score){
            clearInterval(timer);
        }else{
            brojac++;
        }
    },10);


});

const kopce1 = document.querySelector('#pomos1');
const kopce2 = document.querySelector('#pomos2');
const kopce3 = document.querySelector('#pomos3');
const kopce4 = document.querySelector('#pomos4');
const kopce5 = document.querySelector('#pomos5');

kopce1.addEventListener('click',function(){
    alert("Загинал некаде во Вардарскиот дел на Македонија");
});
kopce2.addEventListener('click',function(){
    alert("Модерната Македонска десна партија - ВМРО-ДПМНЕ го славеше каде стигнеше");
});
kopce3.addEventListener('click',function(){
    alert("Во истата година кога бил и прочуениот Берлинскиот конгрес");
});
kopce4.addEventListener('click',function(){
    alert("Во градот кој се наоѓа во Солунското поле");
});
kopce5.addEventListener('click',function(){
    alert("Грција поседува 51% од територијата на Македонија");
});




//WINDOW OBJECT
//Globalen object za front-end JAVASCRIPT
//Se sto pravime avtomatski se cuva vo toj objekt
//ako vo consolata napiseme window, kje ni go dade toj objekt i ako go otvorime ke videme ton funkcii metodi i drugi raboti(se sto sme napravile so front-end javascript se cuva tam)
//ako napiseme window.outerWidth kje ni ja dade momentalnata sirina na prozorecot

//window object(global object)
console.log("Hello World");
window.console.log("Hello World !");
//ovie 2 se isti, zatoa sto window e globalen objekt, console metodot pripaga na window objektot, pa ne mora da pisuvame sekogas napred window. , ideme direktno na metodite..

console.log(document.querySelector("form"));
console.log(window.document.querySelector("form"));
// isto taka i document e metod od globalniot objekt window, isto taka i nego moze da go pisuvame so window napred, no ne mora

//alert("Hello");
//window.alert("Hello !");
// i ovie dvete se isti, alert e metod pod window globalniot objekt !


//Drug metod e setTimeout()
//window.setTimeout e isto so samo setTimeout()
//Ovoj metod ima 2 argumenti i toa prviot e funkcija koja se povikuva koga ke istece vremeto, a vremeto se zadava kako vtor argument vo mili sekundi 5000 = 5 sekundi
//znaci posle 5 sekundi kje se pojavi alert pop-up so odreden text
/*

setTimeout(function(){
    alert("Ne se misli tolku ovoa se osnovni raboti!");
},42000);


*/



// INTERVALI

//isto kako prethodniot metod setTImeout taka i setInterval izvrsuva nesto za odredeno vreme
// primer ako vremeto e 1 sekunda, sega ovoj metod ke go izvrsuva toa na sekoja sekunda, a ne samo ednas kako setTimeout

/*
 setInterval(() => {
    console.log("Helo");
}, 1000);


*/
//ovaa funkcija kje pecati helo na sekoja sekunda
//No kako da go sopreme toa , ako ne go sopreme ke pecati do nedogled
//Kako prvo metodot treba da go cuvame vo promenliva
//kako vtoro treba da napraveme promenliva brojac i da ja zgolemuvame na sekoe pecatenje
// ke postavime if ako brojacot e = na 5 togas
// togas pisuvame drug metod koj za argument ke ja ima promenlivata vo koja sme go cuvale metodot setInterval()
// toj metod se vika clearInterval(imeto na promenlivata)

let i =0;
const interval = setInterval(function(){
    console.log("INTEV");
    i++;
    if(i==5){
        clearInterval(interval);
    }
},1000)