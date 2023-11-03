const {
  Model,
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Card}) {
      this.hasMany(Card, { foreignKey: 'user_id' });

    }
  }
  User.init({
    login: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    cash: {
      defaultValue: 1000,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: "User",
  });
  return User;
};
