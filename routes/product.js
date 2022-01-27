const router = require("express").Router()
const userCtrl = require("../controllers/productCtrl")

router.post("/create", userCtrl.create)
router.get("/getAll", userCtrl.getAll)
router.delete("/delete", userCtrl.delete)

module.exports = router
