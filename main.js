'use strict';

// Task #1
// Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.


                            // let emptyObject={};
                            //
                            // emptyObject.name="John";
                            // emptyObject.surname="Smith";
                            // emptyObject.name="Pete";
                            // delete emptyObject.name;
                            //
                            // console.log(emptyObject);





//     Task #2
// Можно ли изменить объект, объявленный с помощью const?
//
// const user = {
//
//     name: «John»
//
// };
//
// // это будет работать?
//
// user.name = «Pete»;



     // С другими кавычками будет работать. Так же будет работать потому, что в объект можно положить что угодно и наоборот,
     //
     // даже если он объявлен через константу.

                                // const user = {
                                //
                                //     name: "John"
                                //
                                // };
                                //
                                // // это будет работать?
                                //
                                // user.name = "Pete";
                                //
                                //
                                // //Да будет работать. значение ключа name перезапишется




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
                                    // };
                                    //
                                    // function allSalaries(salaries) {
                                    //
                                    //     let sum = 0;
                                    //     for (let salary of Object.values(salaries)) {
                                    //         sum += salary;
                                    //     }
                                    //
                                    //     return sum;
                                    // };
                                    // console.log(allSalaries(salaries));