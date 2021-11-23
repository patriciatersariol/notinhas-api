import { getRepository } from "typeorm";
import { Notebook } from "../entities/Notebook";
import { INotebookDB } from "../interfaces/notebook.interface";

export const saveNewNotebook = async (newNotebook: Object): Promise<INotebookDB> => {
    const notebookRepo = getRepository(Notebook)
    const notebook = notebookRepo.create(newNotebook)
    const result: INotebookDB = await notebookRepo.save(notebook)
    return  result
}