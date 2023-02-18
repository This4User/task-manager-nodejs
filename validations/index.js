const Ajv = require("ajv");
const ajvErrors = require("ajv-errors");


//TODO: Map ajv errors to Array<{name: message}>

const ajv = new Ajv({ allErrors: true });

ajvErrors(ajv);

module.exports = ajv;