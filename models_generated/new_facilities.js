const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('new_facilities', {
    Code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Officialname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Registration_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Keph level': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Facility type': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Facility_type_category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Owner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Owner type': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Regulatory body': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Beds: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Cots: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    County: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Constituency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Sub county': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Ward: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Operation status': {
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
    'Public visible': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Closed: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'new_facilities',
    schema: 'public',
    timestamps: false
  });
};
