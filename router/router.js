const express = require("express");
const router = express.Router();

const Controller = require("../controllers/todoController");

// belajar
router.get("/test", Controller.test);
router.get("/query", Controller.query);
router.get("/params/:name/:age", Controller.params);

// To do list
router.post("/create", Controller.create);
router.get("/", Controller.show);
router.get("/:id", Controller.showDetail);
router.put("/:id/update", Controller.update);
router.delete("/:id/delete", Controller.delete);

module.exports = router;