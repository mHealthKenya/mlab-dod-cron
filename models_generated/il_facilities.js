const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('il_facilities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_no: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    internet: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "No"
    }
  }, {
    sequelize,
    tableName: 'il_facilities',
    schema: 'public',
    timestamps: false
  });
};
