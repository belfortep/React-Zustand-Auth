import { Router } from "express";
import {AuthController} from '../controller/authController'
import { requireAuth } from "../middlewares/requireAuth";
const router = Router()

router.post('/login', AuthController.login)

router.get('/profile', requireAuth, AuthController.profile)

export default router