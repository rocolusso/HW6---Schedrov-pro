// 'use strict';
//
//
// Task #1
// Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.
//
//

// Способ 1:

// const user = {};
//
// user['name'] = 'John';
// user['surname'] = 'Smith';
// delete user['name'];
// user['name'] = 'Pete';
//
// console.log(user);

// Способ 2:

// let user = new Object();
//
// user.name='John';
// user.surname='Smith';
// user.name='Pete';
//
// console.log(user);







//     Task #2
// Можно ли изменить объект, объявленный с помощью const?
//
// const user = {
//
//     name: «John»
//
// };
//
// // это будет работать?       Да, работать будет - пример выше. Значение перезапишется.
//
// user.name = «Pete»;
//
//
//
// Task #3
// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
//     let salaries = {
//
//         John: 100,
//
//         Ann: 160,
//
//         Pete: 130
//
//     }
//
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum

    // let salaries = {
    //
    //     John: 100,
    //
    //     Ann: 160,
    //
    //     Pete: 130
    //
    // }
    //
    // Способ 1:
    //
    // const sum = salaries.John + salaries.Ann + salaries.Pete;
    // console.log(sum);
    //
    // Способ 2:
    //
    // const sum = parseInt(salaries.John) + parseInt(salaries.Ann) + parseInt(salaries.Pete);
    // console.log(sum);



