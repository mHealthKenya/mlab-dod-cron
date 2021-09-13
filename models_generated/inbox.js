const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inbox', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shortCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MSISDN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    msgDateCreated: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdOn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    processed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    LinkId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inbox',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "inbox_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
