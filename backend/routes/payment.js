// backend/routes/payments.js
const express = require('express');
const router = express.Router();

// Payment routes
router.post('/send', (req, res) => {
    // Send payment logic
});

router.post('/receive', (req, res) => {
    // Receive payment logic
});

module.exports = router;
