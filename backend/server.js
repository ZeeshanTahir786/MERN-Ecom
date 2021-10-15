const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Config
dotenv.config({ path: "backend/config/config.env" });
// Conect to Database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
