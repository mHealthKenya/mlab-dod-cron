const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_gateway', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    delivery_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cost: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'sms_gateway',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sms_gateway_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
