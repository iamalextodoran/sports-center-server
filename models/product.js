"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      // favorite: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      colors: DataTypes.ARRAY(DataTypes.TEXT),
      pictures: DataTypes.ARRAY(DataTypes.TEXT),
      sizes: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
