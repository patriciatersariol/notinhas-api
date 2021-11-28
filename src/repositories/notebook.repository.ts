import { getRepository } from "typeorm";
import { Notebook } from "../entities/Notebook";
import { INotebookDTO, INotebookInput } from "../interfaces/notebook.interface";

export const saveNewNotebook = async (newNotebook: INotebookInput): Promise<INotebookDTO> => {
    const notebookRepo = getRepository(Notebook)
    const notebook = notebookRepo.create(newNotebook)
    const result = await notebookRepo.save(notebook)

    const createdNotebook: INotebookDTO = {
        name: result.name,
        description: result.description,
        category: result.category,
        createdAt: result.createdAt,
        updatedAt: result.updatedAt,
    }  
    
    return createdNotebook
}