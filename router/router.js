import express from "express";
const router = express.Router()


router.get("/", (req, res) =>{
    res.render('home')
})

router.get("/projet-1", (req, res) =>{
    res.render("projet-1")
})

router.get("/send", (req, res) => {
    res.render("send")
})

export default router;