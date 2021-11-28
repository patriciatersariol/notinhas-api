import { Notebook } from "../entities/Notebook";
import { INotebookDTO, INotebookInput } from "../interfaces/notebook.interface";
import { saveNewNotebook } from "../repositories/notebook.repository";

export const save = async (newNotebook: INotebookInput): Promise<INotebookDTO> => {
    return await saveNewNotebook(newNotebook)
}