//Import Packages
import express from "express";

//Importing Customs
import { Storage } from "./src/data/Storage.js";

import { redirect } from "./src/redirect.js";
import { cutURL } from "./src/cutURL.js";

//Declarations
const app = express();
const port = 8080;

//Middleware
app.use(express.json());

//Start Scripts
if (Storage.data.links === undefined) {
  Storage.data.links = [];
  Storage.write();
}

//Routes

app.post("/cut", cutURL);
app.get("/[a-f0-9]{5}", redirect);

app.listen(port, () => {
  console.log(`The serve is running on port ${port}`);
});
