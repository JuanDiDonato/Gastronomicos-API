const {Router} = require("express"), menusControllers = require("../Controllers/Menus");

const router = Router();
/**
 * Rutas para el manejo de los menus
 */
router.get("/menus", (req,res) => menusControllers.getMenu(req,res));
router.post("/menus", (req,res) => menusControllers.createMenu(req,res));
router.put("/menus/:_id", (req,res) => menusControllers.updateMenu(req,res));
router.delete("/menus/:_id", (req,res) => menusControllers.deleteMenu(req,res));

module.exports = router; 