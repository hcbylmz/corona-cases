let requestURL = 'https://pomber.github.io/covid19/timeseries.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();
let option1 = document.getElementById("ulke");
let option3 = document.getElementById("tarih");
let goster1 = document.querySelector(".goster");
let deneme;
let keys;
let show = document.querySelector(".deneme_metin");
let show1 = document.querySelector(".olu_sayisi");
let show2 = document.querySelector(".tedavi");
request.onload = function() {
deneme = JSON.parse(this.responseText);
//console.log(deneme.Thailand[0].confirmed);
keys = Object.keys(deneme);
//console.log (keys);
keys.sort();
for (let a=0;a<keys.length;a++){
var option = document.createElement("option");
option.text = keys[a];
option.value = keys[a];
//console.log (deneme.keys[a]);
var select = document.getElementById("ulke");
select.append(option);
}

 for (let b=deneme.Turkey.length-1; b>-1;b--){
    var option2 = document.createElement("option");
    option2.text = deneme.Turkey[b].date;
    option2.value = deneme.Turkey[b].date;
 //   console.log (deneme.Turkey[b].date);
    var select1 = document.getElementById("tarih");
    select1.append(option2);
} 


}
goster1.onclick = function (){   
let a = option1.value;
let c = option3.value;
let index;
//console.log (deneme[a][0].confirmed);
//console.log (deneme.Turkey[0].date);
//console.log(deneme.Turkey.length);

//console.log(show_date);
 for (let k=0; k<deneme.Turkey.length;k++){
    if (c===deneme.Turkey[k].date){
     index=k;  
    }
   
 } 
let show_date = deneme[a][index].date;
let show_death = deneme[a][index].deaths;
let show_confirmed =  deneme[a][index].confirmed;
let show_recovered =  deneme[a][index].recovered;

show.textContent = " Vaka sayısı: " + show_confirmed;
 show1.textContent = " Ölü sayısı: " + show_death;
 show2.textContent =  " Tedavi edilen sayısı: " + show_recovered;
 console.log(index);
}