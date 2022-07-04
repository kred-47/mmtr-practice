//const Task = require('./classes');
//import Task from "./classes";

console.log(typeof Task); // function
let task = new Task(); // 'Создан экземпляр task!'
task.showId(); // 23
Task.loadAll();// 'Загружаем все tasks...'