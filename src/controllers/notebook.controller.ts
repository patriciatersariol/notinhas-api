import { Request, Response } from "express"
import { Notebook } from "../entities/Notebook"
import { INotebookDTO, INotebookInput } from "../interfaces/notebook.interface"
import {save} from "../services/notebook.service"

export const createNotebook = async (request: Request, response: Response): Promise<Response> => {
    const notebookData: INotebookInput = request.body
    console.log(notebookData)

    const newNotebook: INotebookInput = {
        name: notebookData.name,
        description: notebookData.description,
        category: notebookData.category
    }

    try {
        const result: INotebookDTO = await save(newNotebook)
        return response.json(result)
    } catch(error) {
        return response.json(error)
    }   
}
