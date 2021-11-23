import { Notebook } from "../entities/Notebook";
import { saveNewNotebook } from "../repositories/notebook.repository";

export const save = async (newNotebook: Object): Promise<Notebook> => {
    return await saveNewNotebook(newNotebook)
}