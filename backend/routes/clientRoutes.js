const express = require("express")
const {
  createContact,
  allContacts,
  createPrayer,
  deleteContact
} = require("../controllers/clientController")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")

router.post("/contact", protect, createContact)
router.post("/contact/:id", protect, deleteContact)
router.get("/contacts", allContacts)
router.post("/prayer", createPrayer)

module.exports = router
