import { Router } from 'express';
import createToken from '../../../Controllers/Token/createdToken'

import User, { IUser } from '../../../Models/user';
import Role from '../../../Models/roles';


const router = Router();

router.post('/signUp', async(req, res, next) =>{
try{
  const { username, name, lastname, email, password, roles } = req.body;
console.log("hola soy un role", roles)
  // Creating a new User Object
  let newUser:any = new User({
    username,
    name,
    lastname,
    email,
    password,
    roles
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
    console.log("holaaaaaa", Role)
  } else {
    const role:any = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }
   // Saving the User Object in Mongodb
   const savedUser = await newUser.save();
   //return res.status(201).json(newUser);
   return res.status(200).json({ token: createToken(savedUser) });
} catch (error){
  return res.status(500).json(error);
}
})

export default router;
