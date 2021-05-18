const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('products', {
    productId: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.BIGINT,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    brand: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    ecoRating: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    packaging: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    carbonFootprint: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imageName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      type: 'TIMESTAMP',
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: 'TIMESTAMP',
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
