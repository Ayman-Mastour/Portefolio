import  express from "express";
import router from "./router/router.js";
import bodyParser from "body-parser";

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

//route pour gérer le formulaire POST

app.listen(port, () => {
    console.log(`tu est connecté ${BASE_URL}`);
})