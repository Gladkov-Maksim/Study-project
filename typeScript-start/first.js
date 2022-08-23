// Переменные
var test = '123';
var test2 = 123;
console.log(test);
// Массивы
var arr = ['1', '2', '3'];
arr[3] = '4';
console.log(arr);
// Объекты
var obj = { name: 'Vasya', age: 20 };
obj.name = 'Petya';
// obj.job = 'Frontender'
// obj.age: 'young'
// Нельзя добавлять новые ключи или изменять типы существующих
// Кортежи
var tuple = [1, 100];
tuple.push(200); // Можно добавлять любые значения указанных типов
// tuple[0] = 200 Но при этом нельзя изменять типы уже существующих элементов. Они прописываются соответственно
console.log(tuple);
