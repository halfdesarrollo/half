import jwt from "jsonwebtoken";
import config from "../../../config/ConfigEntorno/config";
import User from "../../../Models/user";
import Role from "../../../Models/roles";

export const verifyToken = async (req:any, res:any, next:any) => {
    let token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
  
    try {
      const decoded:any = jwt.verify(token, config.jwtSecret);
      req.userId = decoded.id;
  
      const user = await User.findById(req.userId, { password: 0 });
      if (!user) return res.status(404).json({ message: "No user found" });
  
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized!" });
    }
  };