const express = require('express');
const router = express.Router();
const { generateResponse } = require('../controllers/GenerateController');

router.get("/", (req, res) => {
    res.status(200).json({
        'message': 'AI Init'
    });
});

router.post("/generate", generateResponse);

module.exports = router;
