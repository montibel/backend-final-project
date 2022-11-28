const router = require('express').Router();
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/isAuthenticated");



router.get("/animals", async (req, res, next) => {
    const animals = await animal.find();

    res.json(animal);
});


router.get("/animals/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const animal = await animal.findById(id);

        res.jason(animal);
    } catch (error) {
        res.status(404).json({ message: "animal not found" });
    }
});

router.post("/", async (req, res, next) => {
    const body = req.body;
    console.log("teste2");
    console.log(body);
    const _animal = await animal.create(body);

    res.status(201).json(_animal);
});

//  UPDATE an animal

router.put("/animals/:id", async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;

    const animal = await animal.findByIdAndUpdate(id, body, { new: true });

    res.json({ animal });
});

//  DELETE an animal

router.delete("/animals/:id", async (req, res, next) => {
    const { id } = req.params;
    const animal = await animal.findByIdAndDelete(id);

    res.json(animal);
});

module.exports = router;