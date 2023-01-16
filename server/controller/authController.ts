import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
export class AuthController 
{
        static async login(req : Request,res : Response) 
        {
                const token = jwt.sign({
                        test : "test"
                }, 'secret key', {
                        expiresIn: 60 * 60 * 24
                })

                return res.status(200).json({
                        token
                })
        }

        static async profile(req : Request, res : Response) 
        {
                return res.json({
                        profile: req.user
                })
        }
}


