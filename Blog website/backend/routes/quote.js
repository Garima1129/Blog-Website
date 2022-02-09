const express = require("express");
const router = express.Router();
const { addQuote,allQuote,quoteData } = require('../controllers/quote');
router.post("/addQuote",addQuote);
router.get("/allQuote",allQuote);
router.get("/getQuote/:id",quoteData);

module.exports = router;