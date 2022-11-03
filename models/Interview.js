const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Interview extends Model {}

// create fields for the Interview model

Interview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    int_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    int_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    int_round: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    int_comments: {
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
    app_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "application",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "interview",
  }
);

module.exports = Interview;
