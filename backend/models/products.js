'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Products.init({
    contractAddress: DataTypes.STRING,
    ownerAddress: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageURI: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Products',
  });
  return Products;
};