import express from "express";
import { body, validationResult } from "express-validator";
import{
    usersController,  
} from "../controllers/index.js"
const router = express.Router();
router.get("/:id", usersController.getDetailUser );
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  usersController.login
);
router.post("/register", usersController.register);
export default router;
