const {Router} = require("express"), router = Router();
const orderControllers = require("../Controllers/Orders");

router.post("/orders", (req,res) => orderControllers.createOrder(req,res));
router.put("/order/:_id", (req,res) => orderControllers.updateOrder(req,res));
router.get("/orders",(req,res) => orderControllers.getAllOrders(req,res));
router.get("/order/:_id",(req,res) => orderControllers.generateLink(req,res));
router.delete("/order/:_id", (req,res) => orderControllers.endOrder(req,res));

module.exports = router;