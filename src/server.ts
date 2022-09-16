import express from "express";

const app = express();
app.use(express.json());
app.get("/ads", () => { console.log("Acessou ADS") });

const port = 3333;
app.listen(port, () => {
   console.log(`Server listening on port ${port}`);
}); 