/*
Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
Оно означает, что «значение не было присвоено».
Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined
*/

let age;
console.log(age); // output: undefined

function bestCity(cityName) {
  console.log("Best city is " + cityName);
}
bestCity(); // output: Best city is undefined
