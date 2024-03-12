const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { routeProcut } = require("./routers/product.routes");
const { routeUser } = require("./routers/user.routes");
const { routeCategory } = require("./routers/category.routes");

app.use(express.json());
dotenv.config();

app.use("/api/v1/products", routeProcut);
app.use("/api/v1/users", routeUser);
app.use("/api/v1/categories", routeCategory);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
