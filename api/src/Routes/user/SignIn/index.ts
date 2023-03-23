import { Router } from 'express';

import User, { IUser } from '../../../Models/user';
import createToken from '../../../Controllers/Token/createdToken'

const router = Router();

router.post('/signIn', async(req, res, next) =>{
    if (!req.body.email || !req.body.password) {
        return res
          .status(400)
          .json({ msg: "Please. Send your email and password" });
      }
    
      const user:any = await User.findOne({ email: req.body.email }).populate(
        "roles"
      );
      
      if (!user) {
        return res.status(400).json({ msg: "The User does not exists" });
      }
    
      const isMatch = await user.comparePassword(req.body.password);
      if (isMatch) {
        
        const { accessToken, refreshToken } = createToken(user);
        return res.status(200).json({ accessToken, refreshToken });

      }
    
      return res.status(400).json({
        msg: "The email or password are incorrect"
      });
      
}

)

export default router;