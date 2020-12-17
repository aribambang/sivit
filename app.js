const express = require("express");
const app = express();
const port = 3000;

const companyRoutes = require("./routes/company");
const visitsRoutes = require("./routes/visits");
const visitorRoutes = require("./routes/visitor");
const receiptionist = require("./routes/receiptionist");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/", receiptionist);
app.use("/companies", companyRoutes);
app.use("/visitors", visitorRoutes);
// app.use("/visits", visitsRoutes);

app.listen(port, () => {
  console.log(`running on : http://localhost:${port}`);
});
