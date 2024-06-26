// Простой веб-сервер: создайте простой веб-сервер с использованием Express.js, который будет отвечать на запросы и возвращать статические страницы или данные из базы данных.

// To-Do приложение: разработайте приложение для создания списка задач с функциями добавления, удаления и отметки выполненных задач.

// Чат-приложение: создайте простой чат, используя WebSocket для обеспечения реального времени обмена сообщениями между пользователями.

// Блог: разработайте блог, где пользователи могут создавать, редактировать и удалять статьи. Можно также добавить функционал комментариев к статьям.

// RESTful API: создайте RESTful API для управления данными, например, для работы с пользователями, товарами или другой информацией.

// Аутентификация и авторизация: реализуйте систему аутентификации пользователей с использованием JWT токенов и различных стратегий аутентификации, таких как OAuth.

// Интеграция с внешними API: попробуйте интегрировать ваше приложение с API сторонних сервисов, например, с социальными сетями или сервисами оплаты.

// Игра на Node.js: создайте простую многопользовательскую игру, используя библиотеки для работы с сокетами, например, Socket.io.


const http = require('http');
const PORT = process.env.PORT || 8000;
const EventEmitter = require('events');
const Router = require('./framework/Router');
const emitter = new EventEmitter();
const Application = require('./framework/Application');

const app = new Application();

app.listen(PORT, ()=>{})

const router = new Router();
router.get('/', (req,res)=>{
    res.end("test send request to /index");
})
router.get('/users', (req,res)=>{
    res.end("test send request to /users");
})



