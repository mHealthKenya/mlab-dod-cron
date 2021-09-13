const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oldfacility', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_number: {
      type: DataTypes.STRING(255),
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
    owner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    regulatory_body: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    beds: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cots: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    county_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    consituency_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Sub_County_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Ward_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operational_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Open_whole_day: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Open_public_holidays: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Open_weekends: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Open_late_night: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Service_names: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Approved: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Public_visible: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Closed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assigned: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(255),
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
    created_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ushauri_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    db_source: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'oldfacility',
    schema: 'public',
    timestamps: false
  });
};
