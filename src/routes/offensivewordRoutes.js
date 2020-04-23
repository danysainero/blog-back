const owRouter = require("express").Router();
const OwController = require("../controllers/offensivewords-controller");

owRouter.get("/offensivewords", OwController.getAllOffensivewords);
owRouter.post("/offensivewords", OwController.createOffensiveword);
owRouter.put("/offensivewords/:offensivewordId", OwController.modifyOffensiveword);
owRouter.delete("/offensivewords/:offensivewordId", OwController.deleteOffensiveword);

module.exports = owRouter;
