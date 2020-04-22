const express = require("express");
const router = express.Router();
const OffensivewordsController = require("../controllers/offensivewords-controller");

router.get("/offensivewords", OffensivewordsController.getAllOffensivewords);
router.post("/offensivewords", OffensivewordsController.createOffensiveword);
router.put("/offensivewords/:offensivewordId", OffensivewordsController.modifyOffensiveword);
router.delete("/offensivewords/:offensivewordId", OffensivewordsController.deleteOffensiveword);

module.exports = router;