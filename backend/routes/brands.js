const express = require('express');
const { Brands } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allBrands = await Brands.findAll();
    if (allBrands) {
      res.status(200).json({ message: "ok", data: allBrands })
    }

  } catch (err) {
    res.status(400).json({
      message: err.message,
      data: null
    });
  }
});

module.exports = router;