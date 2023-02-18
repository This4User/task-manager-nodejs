const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const userValidator = require("../validations/user.validations");

class userController {
	async create(req, res) {
		const { name, surname, password } = req.body;

		if (!userValidator({ name, surname, password })) {
			res.json(userValidator.errors);
			return;
		}

		const newUser = await UserModel.create({
			name,
			surname,
			password: await bcrypt.hash(password, 10),
		});

		res.json(newUser);
	}

	async auth(req, res) {
		const { name, password } = req.body;
		const user = await UserModel.findOne({
			attributes: [ "name", "surname", "password" ],
			where: { name },
		});

		res.json(await bcrypt.compare(password, user.password));
	}

	async getAll(req, res) {
		const users = await UserModel.findAndCountAll();

		res.json(users);
	}

	async getById(req, res) {
		const id = req.params.id;
		const user = await UserModel.findOne({
			attributes: [ "name", "surname" ],
			where: { id },
		});

		res.json(user);
	}

	async update(req, res) {
		const { id, name, surname } = req.body;
		const user = await UserModel.update(
			{ name, surname },
			{
				where: { id },
				returning: [ "name", "surname" ],
			},
		);

		res.json(user);
	}

	async delete(req, res) {
		const id = req.params.id;
		const user = await UserModel.destroy({ where: { id } });

		res.json(user);
	}
}

module.exports = new userController();