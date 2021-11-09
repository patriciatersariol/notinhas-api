import { getRepository } from "typeorm";
import { Notebook } from "../entities/Notebook";

export const save = async (newNotebook: Object): Promise<Notebook> => {
    const notebookRepo = getRepository(Notebook)
    const notebook = notebookRepo.create(newNotebook)
    return await notebookRepo.save(notebook) 
}