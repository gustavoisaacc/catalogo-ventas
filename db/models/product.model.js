const { DataTypes, Sequelize, Model } = require("sequelize");
const { CATEGORY_TABLE } = require("./category.model");

const PRODUCT_TABLE = "products";

const productSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: { model: CATEGORY_TABLE, key: "id" },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: "category" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: false,
    };
  }
}

module.exports = { Product, productSchema, PRODUCT_TABLE };
