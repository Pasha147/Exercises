import { Router } from "express";
import { getAll, create, remove } from "../controllers/servers.js";

const router = Router();

//getAll - контроллер который импортируем с отдельного файла(чтоб была удобная форма записи можно его написать тут же)
router.get("/api/server", getAll);

router.post("/api/server", create);

//удалять запись
router.delete("/api/server/:id", remove);

export default router;
