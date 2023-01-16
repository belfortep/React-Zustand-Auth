import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const requireAuth = (req : Request, res: Response, next: NextFunction) => {

        const authHeader = req.headers.authorization

        if (!authHeader) return res.status(401).json({
                message: "Unauthorizeed"
        })

        const token = authHeader.split(' ')[1]

        if (!token) return res.status(401).json({
                message: "Unauthorizeed"
        })

        jwt.verify(token, 'secret key', (err, user) => {
                if (err) return res.status(401).json({
                        message: "Unauthorizeed"
                })

                req.user = user //agrego la propiedad user al request
                next()
        })

        
}