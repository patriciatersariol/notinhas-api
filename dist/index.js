"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var notebook_routes_1 = __importDefault(require("./api/routes/notebook.routes"));
var note_routes_1 = __importDefault(require("./api/routes/note.routes"));
var app = (0, express_1.default)();
(0, typeorm_1.createConnection)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
app.use(notebook_routes_1.default);
app.use(note_routes_1.default);
app.listen(3000, function () { return console.log('Server running on port 3000'); });
/*
1. Separar responsabilidades:
    - criar um 'services' com os métodos chamados nas rotas
        - eles devem fazer as queries do banco

    - controllers devem apenas lidar com req e res -> retornando promisse

2. Adicionar funções para completar o CRUD de Note e Notebooks

*/ 
