const User = require("./User");
const Application = require("./Application");
const Interview = require("./Interview");

// create associations
User.hasMany(Application, {
  foreignKey: "user_id",
});

User.hasMany(Interview, {
  foreignKey: "user_id",
});

Application.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Application.hasMany(Interview,{
  foreignKey: "app_id",
  onDelete: 'SET NULL'
});

Interview.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Interview.belongsTo(Application, {
  foreignKey: "app_id",
  onDelete: "SET NULL",
});

module.exports = {
  User,
  Application,
  Interview,
};
