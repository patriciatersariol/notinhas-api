import { Request, Response } from "express"
import { Notebook } from "../entities/Notebook"
import { INotebookDTO, INotebookInput } from "../interfaces/notebook.interface"
import {save} from "../services/notebook.service"

export const createNotebook = async (request: Request, response: Response): Promise<Response> => {
    const notebookData: INotebookInput = request.body

    const newNotebook: INotebookInput = {
        name: notebookData.name,
        description: notebookData.description,
        category: notebookData.category
    }

    try {
        const result: INotebookDTO = await save(newNotebook)
        return response.status(201).json(result)
    } catch(error) {
        console.log(error)
        return response.status(400).json(error)
    }   
}
