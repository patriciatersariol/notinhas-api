import { Request, Response } from "express"
import {save} from "../services/notebookService"

export const createNotebook = async (request: Request, response: Response) => {
    const notebookData = request.body

    const newNotebook = {
        name: notebookData.name,
        description: notebookData.description,
        category: notebookData.category
    }

    try {
        const result = await save(newNotebook)
        return response.json(result)
    } catch(error) {
        return response.json(error)
    }   
}
