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

const emitter = new EventEmitter();

class Router {
    constructor() {
        this.endpoints = {};
        
    }

    request(method = 'GET', path, handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];
        if(endpoint[method]){
            throw new Error(`[${method} on adress ${path} is not exist ]`)
        }

        endpoint[method] = handler;
        emitter.on(`[${path}]:[${method}]`, (req,res)=>{
            handler(req,res)
        })
    }
    
    get(path, handler){
        this.request('GET', path, handler)
    }
    post(path, handler){
        this.request('POST', path, handler)
    }
    put(path, handler){
        this.request('PUT', path, handler)
    }
    delete(path, handler){
        this.request('DELETE', path, handler)
    }
}

const router = new Router();
router.get('/', (req,res)=>{
    res.end("test send request to /index");
})
router.get('/users', (req,res)=>{
    res.end("test send request to /users");
})

const server = http.createServer((req, res)=>{
   const emmited = emitter.emit(`[${req.ulr}]:[${req.method}]`, req, res);
   if(!emmited) res.end();
}).listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}\nurl - http://localhost:${PORT}`);
})

