const ajv = require("./index");

const userSchema = {
	type: "object",
	properties: {
		name: {
			type: "string",
			minLength: 2
		},
		surname: {
			type: "string",
			minLength: 2
		},
		password: {
			type: "string",
			minLength: 6
		},
	},
	required: [ "name", "surname", "password" ],
	additionalProperties: false,
};

const userValidator = ajv.compile(userSchema);

module.exports = userValidator;