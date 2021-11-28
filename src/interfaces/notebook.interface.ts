import { Note } from "../entities/Note";

export interface INotebookInput {
    name: string;
    description: string; 
    category: string;
}

export interface INotebookDTO extends INotebookInput {
    id?: number;
    createdAt: Date;
    updatedAt: Date;
}