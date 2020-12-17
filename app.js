const express = require("express");
const app = express();
const port = 3000;

const companyRoutes = require("./routes/company");
const visitsRoutes = require("./routes/visits");
const visitorRoutes = require("./routes/visitor");
const receiptionist = require("./routes/receiptionist");
const session = require("express-session");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static("assets"));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", receiptionist);
app.use("/companies", companyRoutes);
app.use("/visitors", visitorRoutes);
app.use("/visits", visitsRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`running on : http://localhost:${port}`);
});
