module.exports = (app) => {
	var isLoggedIn = (req, res, next) => {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.status(400).send("Oh uh, something went wrong");
		}
	}

	app.route('/')
		.get((req, res) => {
			res.sendFile(process.cwd() + '/public/index.html');
		});
}
