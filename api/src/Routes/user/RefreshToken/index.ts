import { Router } from "express";

import User, { IUser } from "../../../Models/user";
import createToken from "../../../Controllers/Token/createdToken";
import { verify } from "jsonwebtoken";

const router = Router();

router.post("/refresh", async (req:any, res, next) => {
	try {
    const refresToken = req.headers["x-access-token"];
    const payload: any = verify(refresToken, 'refresh_secret');

    if(!payload) {
      return res.status(401).send({message: 'unauthenticated a'})
    }

    const user: any = await User.findById(payload.id)

    const { accessToken, refreshToken } = createToken(user);

    return res.status(200).json({ accessToken, refreshToken });

  } catch (error) {
    return res.status(401).send({message: 'unauthenticated'})
  }
});

export default router;