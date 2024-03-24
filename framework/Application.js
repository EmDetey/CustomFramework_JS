const http = require('http');
const EventEmmet = require('events');
const { EventEmitter } = require('stream');
module.exports = class Application {
    constructor(){
        this.emitter = new EventEmitter();
        this.server = this._createServer();
    }

    addRouter(router){
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.enpoints[path];
            Object.keys(endpoint).forEach(method=>{
                const handler = endpoint[method];
                this.emitter.on(this._getRouterMask(path,method), (req,res)=>{
                    handler(req,res)
                })
            })
        });
    }

    listen(port, callback){
        this.server.listen(port, callback);
    }

    _createServer(){
        return http.createServer((req, res)=>{
            const emmited = emitter.emit(this._getRouterMask(req.url, req.method), req, res);
            if(!emmited) res.end();
         }).listen(PORT, ()=>{
             console.log(`Server listening on port ${PORT}\nurl - http://localhost:${PORT}`);
         })
    }

    _getRouterMask(path, method){
        return `[${path}]:[${method}]`;
    }
}