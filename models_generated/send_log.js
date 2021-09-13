const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('send_log', {
    send_log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    statusCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    messageId: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cost: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'send_log',
    schema: 'public',
    timestamps: false
  });
};
