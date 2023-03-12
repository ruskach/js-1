// console.log(100); console.log() - выводит информацию в консоль браузера

// console.log('Первый урок по js');
// console.log(10);
// console.log(true);
// console.log(false);


// var myAge = 'Zafar';
// var age = 100;


 // оператор склеивания (+)
// console.log('Я ' + myAge +  " мне " + age + ' лет' );

// + перед функцией или переменной преобразует наш элемент в числовой тип данных

// var word = prompt('Введите какое то слово');

// alert(word)


// console.log('10 + 5 = ' + (10 + 5));
// console.log('10 - 5 = ' + (10 - 5));
// console.log('10 * 5 = ' + 10 * 5);
// console.log('10 / 5 = ' + 10 / 5);
// console.log('10 % 5 = ' + 16 % 5);



alert('Привет пройдёшь тест  ?')

var name = prompt('Сначала скажи как тебя зовут ?');
var age = prompt('Привет ' + name + ' сколько тебе лет ?');
alert('Ну что начнем ?');

var plus = prompt(name + ' сколько будет 60 + 9 =');
var minus = prompt(name + ' а теперь посложнее 1000 - 7 =');
alert('Да я погляжу ты прям гений несмотря на то ,что тебе ' + age + ' лет');
var umnozit = prompt('Теперь умножение 2 * 2 =');
var delit = prompt('10 / 2 =');
alert('Молодец теперь посмотри свои ответы в консоле');

console.log('Правильный ответ 60 + 9 = 69' + ' твой ответ был ' + plus);
console.log('Правильный ответ 1000 - 7 = 993' + ' твой ответ был ' + minus);
console.log('Правильный ответ 2 * 2 = 4' + ' твой ответ был ' + umnozit);
console.log('Правильный ответ 10 / 2 = 5' + ' твой ответ был ' + delit);

alert('А теперь давай я буду считать');

var first = +prompt('Введи любое целое число');
var seccond = +prompt('И еще раз');
var third = +prompt('И еще');

var x = first;
var y = seccond;
var z = third;
var res = +((x+y+z)/3);

alert('Среднее арифметическое равно ' + res);
alert('Все пока!');
