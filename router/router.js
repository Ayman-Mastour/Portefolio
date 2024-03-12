import express from "express";
import nodemailer from "nodemailer"
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
router.post('/send', (req, res) => {
    const { name, email, message} = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aymen.mst91@gmail.com',
            pass: 'ldrx qziu lfae vfcn'
        }
    });

    const mailOptions = {
        from: 'aymen.mst91@gmail.com',
        to: 'aymen.mst91@gmail.com',
        subject: 'message portefolio',
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email envoyé:' + info.response);
        res.redirect('/send')
    })
})


export default router;