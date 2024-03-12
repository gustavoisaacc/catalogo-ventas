const { DataTypes, Sequelize, Model } = require("sequelize");

const CATEGORY_TABLE = "categories";

const categorySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, {
      as: "products",
      foreignKey: "categoryId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
      timestamps: false,
    };
  }
}

module.exports = { Category, categorySchema, CATEGORY_TABLE };
