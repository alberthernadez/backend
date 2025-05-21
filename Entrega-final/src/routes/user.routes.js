const express = require('express');
const router = express.Router();
const  {permit}  = require('../middlewares/authorization');


router.get('/current', (req, res) => {
    if (!req.user) return res.status(401).json({ error: 'No autenticado' });

    const userDTO = {
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
    };

    res.json(userDTO);
});

module.exports = router;
