import mongoose from "mongoose";

export const ROLES = ["client", "waiter", "resto", "admin"];

const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Role", roleSchema);