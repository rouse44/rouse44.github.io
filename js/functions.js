// узнаем тип числа
function typeofchislo (chislot){
chislot= chislot % 2;
  if( chislot == 0 ){
    return chislot ="четное";
  }
  else {
    return chislot ="нечетное";
  }
}
// генероатор случайного числа
  function getRandomInt(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
