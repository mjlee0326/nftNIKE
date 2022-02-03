const express = require('express');
const { Brands, Products } = require('../models');
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


router.get('/:brandName', async (req, res, next) => {
  console.log(req.params);
  try {

    const title = await Brands.findOne({
      where: {
        name: req.params.brandName
      }
    })
    const products = await Products.findAll({
      where: {
        contractAddress: title.ownerAddress
      }
    });
    if (title) {
      res.status(200).json({ message: "ok", data: { title, products } })
    }

  } catch (err) {
    res.status(400).json({
      message: err.message,
      data: null
    });
  }
});

module.exports = router;