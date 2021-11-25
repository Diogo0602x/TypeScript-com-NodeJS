import { Request, Response } from 'express'

import User from '../schemas/User'

class UserController {
    public async index(req: Request, res: Response): Promise<Response>{
        const users = await User.find()

        return res.json(users)
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body)
        
        return res.json(user)
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        
        const { _id } = req.body
        
        const deleteUser = await User.deleteOne(_id)
        
        return res.json(deleteUser)
    }
}

export default new UserController()