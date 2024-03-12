import  express from "express";
import router from "./router/router.js";
import bodyParser from "body-parser";
import nodemailer from "nodemailer"

const app = express();
const port = 7016;
const hostname = "localhost";

export const BASE_URL = `http://${hostname}:${port}`


app.use(express.static("public"));
app.use("/img", express.static("img"));


app.set("views","./views");
app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/", router);

app.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {
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
        res.redirect('/')
    })
})

app.listen(port, () => {
    console.log(`tu est connecté ${BASE_URL}`);
})