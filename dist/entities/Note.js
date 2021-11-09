"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
var typeorm_1 = require("typeorm");
var Notebook_1 = require("./Notebook");
var Note = /** @class */ (function () {
    function Note() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Note.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Note.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Note.prototype, "subtitle", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Note.prototype, "text", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'created_at',
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; }
        }),
        __metadata("design:type", Date)
    ], Note.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'updated_at',
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)'
        }),
        __metadata("design:type", Date)
    ], Note.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Notebook_1.Notebook; }, function (notebook) { return notebook.notes; }, { eager: true }),
        __metadata("design:type", Notebook_1.Notebook)
    ], Note.prototype, "notebook", void 0);
    Note = __decorate([
        (0, typeorm_1.Entity)()
    ], Note);
    return Note;
}());
exports.Note = Note;
