const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Application extends Model {}

// create fields for the Application model

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    app_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    app_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    app_language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      // does this need to match from User exactly or can type be integer?
      type: DataTypes.UUID,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "application",
  }
);

module.exports = Application;
