import { Note } from "../entities/Note";

export interface IBaseNotebook {
    name: string;
    description: string; 
    category: string;
}

export interface INotebookDB extends IBaseNotebook {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    notes: Array<Note>
}