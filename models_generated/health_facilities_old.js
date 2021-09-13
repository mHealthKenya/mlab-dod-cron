const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('health_facilities_old', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "health_facilities_copy1_code_key"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keph_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facility_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Sub_County_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lat: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lng: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    active_last_month: {
      type: DataTypes.STRING(5),
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
    }
  }, {
    sequelize,
    tableName: 'health_facilities_old',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "health_facilities_copy1_code_key",
        unique: true,
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
