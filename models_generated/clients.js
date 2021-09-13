const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clients', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    f_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    l_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    kdod_number: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'health_facilities',
        key: 'code'
      }
    },
    notification: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "Active"
    }
  }, {
    sequelize,
    tableName: 'clients',
    schema: 'public',
    timestamps: false
  });
};
