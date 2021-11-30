//RoleSchemae to Create New Role That To Give The AUTH

const mongoose = require("mongoose");

const role = new mongoose.Schema({
  role: { type: String, required: true },
  Permissions: { type: Array },
});
module.exports = mongoose.model("Role", role);
