import{Router} from "express";
import controller from "../Containers/container.js";

const router = Router();

router.get("/", controller.getAll);

export default router;