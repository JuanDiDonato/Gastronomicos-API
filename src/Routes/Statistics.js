const {Router} = require("express"), router = Router();
const statisticControllers = require("../Controllers/Statistics");

router.post("/statistics", (req,res) => statisticControllers.CreateStatistic(req,res));
router.get("/statistics", (req,res) => statisticControllers.getAllStatistics(req,res));

module.exports = router;