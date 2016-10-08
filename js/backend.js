
document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){

   var ucolor;
   var utype;
   // устанавливаем счет игрока

   // счет игрока
   var score = get_cookie("total");

if(score==0){
  score= -100;
}
if (score == null){
score = 100;

}

   // выборка элементов
var roullinterface = document.getElementById('interface');
   var rotaterullet = document.getElementById('rotaterullet');
   var total = document.getElementById('balance');
   var colors=document.getElementById('colors');
   var typech=document.getElementById('typech');
   var number=document.getElementById('number');
   var play=document.getElementById('play');
   var changecolors=document.getElementById('changecolors');
   var vibor=document.getElementById('vibor');
   var backclr=document.getElementById('backclr');
   var backtype=document.getElementById("backtype");
   var changetype=document.getElementById('changetype');
   var vvod=document.getElementById('vvod');
   var backnumber=document.getElementById('backnumber');
   var red=document.getElementById('red');
   var black=document.getElementById('black');
   var chet=document.getElementById('chet');
   var nechet=document.getElementById('nechet');
   var selchislo=document.getElementById('chislo');
   var znstavki =document.getElementById('znstavki');
   var stavka =document.getElementById('stavka');
    var changest =document.getElementById('changest');
    var createst =document.getElementById('createst');
    var winorlose =document.getElementById('winorlose');
    var resrull =document.getElementById('resrull');
    var money =document.getElementById('money');
    var rcontinue =document.getElementById('continue');
    var warning =document.getElementById('warning');
    var reset =document.getElementById('reset');


//скрываем рулетку
reset.onclick=function(){
  DelScore();
  location.reload();

}

rcontinue.onclick=function () {
  location.reload();

}

changest.onclick=function () {
  location.reload();

}
znstavki.oninput=function(){
  razmst=znstavki.value;
  createst.style.display="inline";
  if(isNaN(razmst)){
  alert("вы ввели не цифру");
  znstavki.value="";
    createst.style.display="none";
  }
if(razmst==0){
  znstavki.value="";
  createst.style.display="none";
  }
}
createst.onclick=function(){
  razmst=znstavki.value;
  razmst=Number(razmst);
  score=Number(score);
if(score>0)
  {
  if(razmst>score)
    {
    alert("Вы не можете поставить такое количество денег");
    znstavki.value="";
    createst.style.display="none";
      }
  else
    {
    vibor.style.display="inline";
    stavka.style.display="none";
    }
  }
if(score<0)
  {
  if(-razmst<score)
    {
      alert("Вы не можете взять больше кредит");
      znstavki.value="";
      createst.style.display="none";
    }
    else
      {
      vibor.style.display="inline";
      stavka.style.display="none";
      }
    }
  }
   //обнуление элементов
function nullparam(){
   ucolor=0;
   utype=0;
   uchislo=0;
   selchislo.selectedIndex = 0;
   chet.style.backgroundColor="white";
   nechet.style.backgroundColor="white";
   red.style.backgroundColor="white";
   black.style.backgroundColor="white";
 }
  function hideEl(){
   // скрвыаем элементы
   vibor.style.display="none";
   colors.style.display="none";
   typech.style.display="none";
   number.style.display="none";
   play.style.display="none";
   rotaterullet.style.display="none";
   createst.style.display="none";
   warning.style.display="none";

 }
 // показываем рулетку
 function ShowRullet() {
   rotaterullet.style.display="inline";
   roullinterface.style.display="none"
   document.body.style.backgroundImage = "url('')";
 }
hideEl();
 nullparam();
 if(score <= -500){
 roullinterface.style.display="none";
 warning.style.display="inline";



 }


selchislo.onfocus=function(){
  play.style.display="inline";
  uchislo=selchislo.value;
}
  selchislo.onchange=function(){
uchislo=selchislo.value;

  }




//кнопки
chet.onclick=function () {
  chet.style.backgroundColor="red";
nechet.style.backgroundColor="white";
  utype="четное";
  play.style.display="inline";
}
nechet.onclick=function () {
  chet.style.backgroundColor="white";
nechet.style.backgroundColor="rgb(90,133,205)"
  utype="нечетное";
  play.style.display="inline";
}
red.onclick=function () {
  red.style.backgroundColor="red";
black.style.backgroundColor="white";
  ucolor="красное";
  play.style.display="inline";
}
black.onclick=function () {
  black.style.backgroundColor="rgb(90,133,205)";
red.style.backgroundColor="white";
  ucolor="черное";
  play.style.display="inline";
}

// действия менюшки
changecolors.onclick = function() {
vibor.style.display="none";
  colors.style.display="inline";


};
changetype.onclick = function() {
vibor.style.display="none";
  typech.style.display="inline";
};
vvod.onclick = function() {
vibor.style.display="none";
  number.style.display="inline";


};
backclr.onclick = function() {
vibor.style.display="inline";
  colors.style.display="none";
  typech.style.display="none";
  number.style.display="none";
    play.style.display="none";
    red.style.backgroundColor="white";
    black.style.backgroundColor="white";
    nullparam();
};
backtype.onclick = function() {
vibor.style.display="inline";
  colors.style.display="none";
  typech.style.display="none";
  number.style.display="none";
    play.style.display="none";
    nullparam();
};
backnumber.onclick = function() {
vibor.style.display="inline";
  colors.style.display="none";
  typech.style.display="none";
  number.style.display="none";
    play.style.display="none";
    nullparam();
};

total.innerHTML+=score+'$';
if(score<0){
total.style.color="red";

}
//массив чисел рулетки
var numbers = ['1 красное','2 черное','3 красное','4 черное','5 красное','6 черное'
,'7 красное','8 черное','9 красное' , '10 черное','11 черное', '12 черное', '13 красное',
'14 черное', '15 красное', '16 черное', '17 красное', '18 черное', '19 красное', '20 черное',
'21 красное', '22 черное', '23 красное', '24 черное', '25 красное', '26 черное', '27 красное',
'28 черное', '29 черное', '30 красное', '31 черное', '32 красное', '33 черное', '34 красное',
'35 черное', '36 красное']
rand=getRandomInt(0,35);
var result= numbers[rand];
var color=result.substring(2,10);
var chislo=result.substring(0,2);
var chtype;
color=color.replace(/(^\s+|\s+$)/g,'');
chislo=chislo.replace(/(^\s+|\s+$)/g,'');
chtype=typeofchislo(chislo);

var button=document.getElementById('play');
var ured=document.getElementById('red');
var ublack=document.getElementById('black');


button.onclick = function() {


  if(uchislo==chislo && uchislo!=0)
  {

winorlose.innerHTML="Вы выйграли";
resrull.innerHTML=chislo+" "+color;
money.innerHTML="+"+razmst+"$";
money.style.color="green";
  ShowRullet();
if(score>0){score=score-razmst+razmst*36;}
if(score<0){var vigr=razmst*36; score=score+vigr;}
SetScore(score);

  }
  if(uchislo!=chislo && uchislo!=0){

  //alert('вы не угадали число '+chislo+color);
  winorlose.innerHTML="Вы не угадали число";
  resrull.innerHTML=chislo+" "+color;
  money.innerHTML="-"+razmst+"$";
  money.style.color="red";
    ShowRullet();
score=score-razmst;
SetScore(score);

  }



if(utype==chtype && utype!=0){
  winorlose.innerHTML="Вы выйграли";
  resrull.innerHTML=chislo+" "+color;
  money.innerHTML="+"+razmst+"$";
  money.style.color="green";
    ShowRullet();
    if(score>0){score=score-razmst+razmst*2;}
    if(score<0){var vigr=razmst*2; score=score+vigr;}
SetScore(score);


}
if(utype!=chtype && utype!=0){

  winorlose.innerHTML="Вы не угадали число";
  resrull.innerHTML=chislo+" "+color;
  money.innerHTML="-"+razmst+"$";
  money.style.color="red";
    ShowRullet();
score=score-razmst;
SetScore(score);


}

if(ucolor==color && ucolor !=0)
  {
  winorlose.innerHTML="Вы выйграли";
  resrull.innerHTML=chislo+" "+color;
  money.innerHTML="+"+razmst+"$";
  money.style.color="green";
    ShowRullet();
    if(score>0){score=score-razmst+razmst*2;}
    if(score<0){var vigr=razmst*2; score=score+vigr;}
  SetScore(score);
  }

if(ucolor!=color && ucolor !=0)
{
  winorlose.innerHTML="Вы не угадали число";
  resrull.innerHTML=chislo+" "+color;
  money.innerHTML="-"+razmst+"$";
  money.style.color="red";
    ShowRullet();
score=score-razmst;
SetScore(score);
}
  };
});
