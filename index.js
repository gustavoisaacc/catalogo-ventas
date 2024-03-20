const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { routeProcut } = require("./routers/product.routes");
const { routeUser } = require("./routers/user.routes");
const { routeCategory } = require("./routers/category.routes");
const {
  boomErrorHandler,
  errorHandler,
} = require("./middleware/validateInput");

app.use(express.json());
dotenv.config();
app.get("/", (req, res) => res.send("welcome my app!"));
app.use("/api/v1/products", routeProcut);
app.use("/api/v1/users", routeUser);
app.use("/api/v1/categories", routeCategory);

app.use(errorHandler);
app.use(boomErrorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
