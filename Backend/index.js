const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/database.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CLIENT_URL}));

// Routes
const filter = require("./controller/filtter.js");
filter(app);

//health check
app.get("/health", (req, res) => {
	res.send("Server is up and running");
});

// Handle unspecified routes
app.all('*', (req, res) => {
	res.status(404).json({
		message: 'Specified route not found',
	});
});

const PORT = process.env.PORT;

db.once('open', () => {
	app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

});

db.on('error', (err) => {
	console.error('MongoDB error:', err);
});

