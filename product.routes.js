const express = require("express");
const router = express.Router();

const Product = require("./product.models");

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        image: req.body.image
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        product.name = req.body.name;
        product.quantity = req.body.quantity;
        product.price = req.body.price;
        product.image = req.body.image;
        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const removedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json(removedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;