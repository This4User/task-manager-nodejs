const express = require("express");
const { routes } = require("./routes/index");
const db = require("./database/index");
require("dotenv").config();

db.sync().then(() => {
	const PORT = process.env.PORT || 8080;
	const app = express();

	app.use(express.json());

	routes.forEach(route => app.use("/api", route));

	app.listen(PORT, () => console.log("\x1b[35m", `Server started on port: ${PORT}`));
});