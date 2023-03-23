import { Router } from 'express';
import { verifyToken } from '../middlewares/Auth/index'

const router = Router();

//user
import SignUp from './user/SignUp'
import SignIn from './user/SignIn'
//import RefreshToken from './user/RefreshToken'
import GetUser from './user/getUsers'





router.use('/user', SignUp)
router.use('/user', verifyToken, SignIn)
//router.use('/user', verifyToken, RefreshToken)
router.use('/users', verifyToken, GetUser)



export default router